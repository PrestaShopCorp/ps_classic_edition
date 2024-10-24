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
use PrestaShop\PrestaShop\Adapter\SymfonyContainer;
use PrestaShopBundle\Controller\Admin\FrameworkBundleAdminController;
use Psr\Container\ContainerInterface;
use Symfony\Component\HttpFoundation\Response;

class AdminPsEditionBasicController extends FrameworkBundleAdminController
{
    protected function layoutTitle(): string
    {
        return $this->trans('Home', 'Modules.Editionbasic.Admin');
    }

    public function filter_settings_tabs_recursive(array $tabs, array $whitelist, array $blacklist = []): array
    {
        $filtered = [];

        foreach ($tabs as $tab) {
            if (in_array($tab['class_name'], $whitelist)) {
                if ($tab['class_name'] === 'AdminAdvancedParameters') {
                    $tmp = [];
                    for ($i = 0; $i < count($tab['sub_tabs']); ++$i) {
                        if (!in_array($tab['sub_tabs'][$i]['wording'], $blacklist)) {
                            array_push($tmp, $tab['sub_tabs'][$i]);
                        }
                    }
                    $tab['sub_tabs'] = $tmp;
                }
                $filtered[] = $tab;
                continue;
            }

            $filtered = array_merge($filtered, $this->filter_settings_tabs_recursive($tab['sub_tabs'], $whitelist, $blacklist));
        }

        return array_values($this->reorganize_tabs($filtered, $whitelist));
    }

    public function filter_modules_tabs_recursive(array $tabs, array $whitelist): array
    {
        $filtered = [];

        foreach ($tabs as $key => $tab) {
            if (isset($tab['sub_tabs']) && is_array($tab['sub_tabs'])) {
                foreach ($tab['sub_tabs'] as $subTab) {
                    array_push($filtered, $subTab);
                }
            }
        }

        foreach ($filtered as $key => $tab) {
            if (in_array($tab['class_name'], $whitelist) || $tab['active'] == 0 || $tab['class_name'] === 'AdminPsEditionBasicSettingsController') {
                unset($filtered[$key]);
            } else {
                if (isset($tab['sub_tabs']) && is_array($tab['sub_tabs'])) {
                    $this->filter_modules_tabs_recursive($tab['sub_tabs'], $whitelist);
                }
            }
        }

        return array_values($filtered);
    }

    public function reorganize_tabs(array $tabs, array $whitelist): array
    {
        $reorganized = [];

        foreach ($whitelist as $tabClassName) {
            foreach ($tabs as $item) {
                if ($item['class_name'] === $tabClassName) {
                    $reorganized[] = $item;
                    break;
                }
            }
        }

        return $reorganized;
    }
}
