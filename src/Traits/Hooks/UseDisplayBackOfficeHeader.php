<?php

/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 */

declare(strict_types=1);

namespace PrestaShop\Module\PsClassicEdition\Traits\Hooks;

use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

trait UseDisplayBackOfficeHeader
{
    public function hookDisplayBackOfficeHeader(): string
    {
        $router = \Context::getContext()->controller->getContainer()->get('router');
        $setupGuideApiUrl = $router->generate('ps_classic_edition_setup_guide_api_index', [], UrlGeneratorInterface::ABSOLUTE_URL);
        $setupGuideApiUrlEdit = $router->generate('ps_classic_edition_setup_guide_api_edit', [], UrlGeneratorInterface::ABSOLUTE_URL);

        $controller = \Tools::getValue('controller');
        $minimizedGuideHtml = '';
        if ($controller !== 'AdminPsClassicEditionHomepageController') {
            // Include the minimized setup guide (only if some steps are still needed)
            $baseLink = \Context::getContext()->link->getAdminBaseLink();
            $minimizedGuideHtml = '<script type="module" src="' . $baseLink . '/modules/ps_classic_edition/views/js/vue/assets/index.js"></script>';
            $minimizedGuideHtml .= PHP_EOL . "
            <script>
                window.minimizedGuideContext = {
                    \"SETUP_GUIDE_API_URL\": \"$setupGuideApiUrl\",
                    \"SETUP_GUIDE_API_URL_EDIT\": \"$setupGuideApiUrlEdit\"
                };
            </script>
            ";
        }

        return <<<END
            {$minimizedGuideHtml}
            <script>
                window.userLocale  = '{$this->context->language->iso_code}';
                window.userflow_id = '{$this->userflow_id}';
            </script>
        END;
    }
}
