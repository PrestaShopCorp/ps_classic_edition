<?php

/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */

declare(strict_types=1);

namespace PrestaShop\Module\PsEditionBasic\Controller;

use PrestaShop\Module\PsEditionBasic\Service\ModuleService;
use PrestaShopBundle\Controller\Admin\FrameworkBundleAdminController;
use Symfony\Component\HttpFoundation\Response;

class AdminPsEditionBasicHomepageController extends FrameworkBundleAdminController
{
    public function indexAction(): Response
    {
        if (intval($this->getContext()->employee->id_profile) !== 1) {
            \Tools::redirectAdmin($this->getContext()->link->getAdminLink('AdminDashboard'));
        }
        $modulePsEditionBasic = $this->get('ps_edition_basic.module');

        if ($this->has('PrestaShop\Module\PsAccounts\Service\PsAccountsService')) {
            $psAccountService = $this->get('PrestaShop\Module\PsAccounts\Service\PsAccountsService');
            $employeeAccount = $psAccountService->getEmployeeAccount();
            $psAccountID = ($employeeAccount ? $employeeAccount->getUid() : $psAccountService->getUserUuid());
            $psShopID = $psAccountService->getShopUuid();
        } else {
            $psAccountID = '';
            $psShopID = '';
        }

        if ($this->has('PrestaShop\Module\PsAccounts\Repository\UserTokenRepository')) {
            $userTokenRepository = $this->get('PrestaShop\Module\PsAccounts\Repository\UserTokenRepository');
            $accountUserToken = strval($userTokenRepository->getOrRefreshToken());
        } else {
            $accountUserToken = '';
        }

        /* ----------------------- Allow auto install account ---------------------- */
        $accountsFacade = null;
        $accountsService = null;
        try {
            $accountsInstaller = $this->get('ps_edition_basic.ps_accounts.installer');
            $accountsInstaller->install();
            $accountsFacade = $this->get('ps_edition_basic.ps_accounts.facade');
            \Media::addJsDef([
                'contextPsAccounts' => $accountsFacade->getPsAccountsPresenter()
                    ->present($modulePsEditionBasic->name),
            ]);
            $accountsService = $accountsFacade->getPsAccountsService();
        } catch (\Exception $e) {
            // Todo logs ?
        }

        /**
         * @var string|string[]
         */
        $shopCountry = $this->getContext()->country->iso_code;
        if (is_array($shopCountry)) { // Country might be an array
            $shopCountry = $shopCountry[array_key_first($shopCountry)] ?? '';
        }
        $shopCountry = strtolower($shopCountry);

        /** @var ModuleService $moduleService */
        $moduleService = $this->get('PrestaShop\Module\PsEditionBasic\Service\ModuleService');

        $setupGuideApiUrl = $this->buildAdminUrl('ps_edition_basic_setup_guide_api_index');
        $setupGuideApiUrlEdit = $this->buildAdminUrl('ps_edition_basic_setup_guide_api_edit');
        $setupGuideApiUrlModalHidden = $this->buildAdminUrl('ps_edition_basic_setup_guide_api_modal_hidden');
        $cacheClearApiUrl = $this->buildAdminUrl('ps_edition_basic_clean_mbo_cache');
        $psAcademyApiUrl = $this->buildAdminUrl('ps_edition_basic_ps_academy');

        return $this->render('@Modules/ps_edition_basic/views/templates/admin/homepage.html.twig', [
            'layoutTitle' => $this->layoutTitle(),
            'urlAccountsCdn' => $accountsService ? $accountsService->getAccountsCdn() : '',
            'enableSidebar' => true,
            'jsContext' => json_encode([
                'SETUP_GUIDE_API_URL' => $setupGuideApiUrl,
                'SETUP_GUIDE_API_URL_EDIT' => $setupGuideApiUrlEdit,
                'SETUP_GUIDE_API_URL_MODAL_HIDDEN' => $setupGuideApiUrlModalHidden,
                'CACHE_CLEAR_API_URL' => $cacheClearApiUrl,
                'PS_EDITION_BASIC_PS_ACADEMY_API_URL' => $psAcademyApiUrl,
                'MAINTENANCE_URL' => $this->generateUrl('admin_maintenance'),
                'moduleName' => $modulePsEditionBasic->displayName,
                'moduleSlug' => $modulePsEditionBasic->name,
                'moduleVersion' => $modulePsEditionBasic->version,
                'moduleIsUpdatable' => $moduleService->getModuleIsUpdatable(),
                'moduleUpdateLink' => $moduleService->getUpdateLink(),
                'userToken' => $accountUserToken,
                'psAccountShopID' => $psShopID,
                'psAccountID' => $psAccountID,
                'shopName' => (string) $this->getConfiguration()->get('PS_SHOP_NAME', ''),
                'isShopEnabled' => (bool) $this->getConfiguration()->get('PS_SHOP_ENABLE', false),
                'callBack' => [
                    'isCalledBack' => (bool) $this->getConfiguration()->get('PS_IS_CALLED_BACK', false),
                ],
                'locale' => $this->getContext()->language->iso_code,
                'shopCountry' => $shopCountry,
            ]),
        ]);
    }

    protected function layoutTitle(): string
    {
        return $this->trans('Home', 'Modules.Editionbasic.Admin');
    }

    private function buildAdminUrl(string $routeName): string
    {
        $router = $this->get('router');
        $scheme = isset($_SERVER['HTTP_REFERER']) && strpos($_SERVER['HTTP_REFERER'], 'https://') === 0 ? 'https://' : 'http://';

        return $scheme . $_SERVER['HTTP_HOST'] . $router->generate($routeName);
    }
}
