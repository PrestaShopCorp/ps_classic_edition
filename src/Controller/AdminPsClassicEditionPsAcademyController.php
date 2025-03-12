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

namespace PrestaShop\Module\PsClassicEdition\Controller;

use PrestaShopBundle\Controller\Admin\FrameworkBundleAdminController;
use Symfony\Contracts\Cache\CacheInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class AdminPsClassicEditionPsAcademyController extends FrameworkBundleAdminController
{
    public function __construct(
        private HttpClientInterface $httpClient,
        private CacheInterface $cache,
    ) {
    }

    /**
     * Handle the call back requests
     *
     * @return JsonResponse
     */
    public function getProducts(): JsonResponse
    {
        $products = $this->cache->get('ps_academy_products', function () {
            return $this->fetchProducts();
        });

        return new JsonResponse($products);
    }

    /**
     * Fetches the products from API
     *
     * @return array
     */
    private function fetchProducts(): array
    {
        $products = [];
        $ids = $this->getProductsId();

        if (!empty($ids)) {
            foreach ($ids as $id) {
                $response = $this->httpClient->request(
                    'GET',
                    'https://prestashop-academy.com/api/products/' . $id . '?ws_key=QG8Z1KD7HAYMAPKK1FR2DKXUIF9LTRJE&output_format=JSON'
                );
                if ($response->getStatusCode() < 300) {
                    $responseContents = json_decode($response->getContent(), true);
                    $products[] = $this->createObjectFromResponse($responseContents['product']);
                }
            }
        }

        return $products;
    }

    /**
     * Retrieves product IDs from API
     *
     * @return array
     */
    private function getProductsId(): array
    {
        $responseVideoHosted = $this->httpClient->request(
            'GET',
            'https://prestashop-academy.com/api/products?filter[mpn]=[videoHosted]&ws_key=QG8Z1KD7HAYMAPKK1FR2DKXUIF9LTRJE&output_format=JSON'
        );
        $responseLiveHosted = $this->httpClient->request(
            'GET',
            'https://prestashop-academy.com/api/products?filter[mpn]=[liveHosted]&ws_key=QG8Z1KD7HAYMAPKK1FR2DKXUIF9LTRJE&output_format=JSON'
        );

        $responseContentsVideoHosted = json_decode($responseVideoHosted->getContent(), true);
        $responseContentsLiveHosted = json_decode($responseLiveHosted->getContent(), true);

        $httpStatusCodeVideoHosted = $responseVideoHosted->getStatusCode();
        $httpStatusCodeLiveHosted = $responseLiveHosted->getStatusCode();

        if ($httpStatusCodeVideoHosted >= 400 || $httpStatusCodeLiveHosted >= 400) {
            return [];
        }

        return array_column(array_merge($responseContentsLiveHosted['products'], $responseContentsVideoHosted['products']), 'id');
    }

    /**
     * Converts API response to an array
     *
     * @param array $response
     *
     * @return array
     */
    private function createObjectFromResponse(array $response): array
    {
        $context = \Context::getContext();
        $locale = 'gb';
        if ($context->language->iso_code) {
            $locale = $context->language->iso_code;

            $availableLang = ['fr', 'it', 'es'];
            if ($locale === 'en' || !in_array($locale, $availableLang)) {
                $locale = 'gb';
            }
        }

        $langIds = [
            'fr' => 0,
            'gb' => 1,
            'es' => 2,
            'it' => 3,
        ];

        $responseCategory = $this->httpClient->request(
            'GET',
            'https://prestashop-academy.com/api/categories/' . $response['id_category_default'] . '?ws_key=QG8Z1KD7HAYMAPKK1FR2DKXUIF9LTRJE&output_format=JSON'
        );
        $httpStatusCode = $responseCategory->getStatusCode();

        if ($httpStatusCode > 300) {
            return [];
        }

        $responseContents = json_decode($responseCategory->getContent(), true);
        $category = $responseContents['category']['link_rewrite'][$langIds[$locale]]['value'];
        $link_rewrite = $response['link_rewrite'][$langIds[$locale]]['value'];
        $productUrl = 'https://prestashop-academy.com/' . $locale . '/' . $category . '/' . $response['id'] . '-' . $link_rewrite . '.html';

        return [
            'name' => $response['name'][$langIds[$locale]]['value'],
            'description' => $response['description'][$langIds[$locale]]['value'],
            'url' => $productUrl,
        ];
    }
}
