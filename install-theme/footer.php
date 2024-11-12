<?php
include_once _PS_INSTALL_PATH_ . '/theme/views/footer.php';
?>
<div style="text-align: center;">
    <?php echo $this->translator->trans('Any questions? We’re here to help. Visit the [1]%help_center_url%[/1]Help Center[2] or [1]%contact_us_url%[/1] contact us[2].', [
        '%help_center_url%' => 'https://help-center.prestashop.com/',
        '%contact_us_url%' => 'https://prestashop-academy.com/contact-us',
        '[1]' => '<a href="',
        '[/1]' => '" target="_blank" rel="noopener noreferrer">',
        '[2]' => '</a>',
    ], 'Install'); ?>
</div>