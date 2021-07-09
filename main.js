$(document).on('click', '#clickToProducts', () => {
    const end = $('#clickToProducts').data('scroll')
    const endclass = $(end).position().top;
    $("html, body").animate({ scrollTop: $(end).position().top }, 300);
})