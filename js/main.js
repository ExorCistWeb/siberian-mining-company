$(document).ready(function() {
    $('.accordion-header').click(function() {
        if ($(this).next().is(':visible')) {
            $(this).next().slideUp(300);
            $(this).find('.icon').css('transform', 'rotate(0deg)');
        } else {
            $('.accordion-content').slideUp(300);
            $('.icon').css('transform', 'rotate(0deg)');
            $(this).next().slideDown(300);
            $(this).find('.icon').css('transform', 'rotate(45deg)');
        }
    });
});
$(document).ready(function() {
    const elementsToAnimate = $(".animate-on-scroll");

    // Настройки Intersection Observer
    function onScrollAnimations() {
        elementsToAnimate.each(function() {
            const $el = $(this);
            if ($el.is(":visible") && isElementInViewport($el)) {
                $el.addClass("animated");
            }
        });
    }

    function isElementInViewport($el) {
        const rect = $el[0].getBoundingClientRect();
        return (
            rect.top <= $(window).height() * 0.8 && rect.bottom >= 0
        );
    }

    $(window).on("scroll resize", onScrollAnimations);
    onScrollAnimations(); // Запускаем проверку при загрузке

    // Добавляем эффект загрузки всей страницы
    $(window).on("load", function() {
        setTimeout(function() {
            $("body").addClass("page-loaded");
        }, 500);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    const overlay = document.querySelector(".overlay");
    const body = document.body; // Получаем элемент body

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
        overlay.classList.toggle("active");

        // Блокируем прокрутку страницы, если меню открыто
        if (nav.classList.contains("active")) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto"; // Восстанавливаем прокрутку
        }
    });

    overlay.addEventListener("click", () => {
        nav.classList.remove("active");
        burger.classList.remove("active");
        overlay.classList.remove("active");
        body.style.overflow = "auto"; // Восстанавливаем прокрутку при закрытии меню
    });
});