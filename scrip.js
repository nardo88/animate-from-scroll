const animitems = document.querySelectorAll('.anim-items');


if (animitems.length){
    

    window.addEventListener('scroll', animOnScroll)

    function animOnScroll(){
        
        animitems.forEach((item, i) => {
            // получаем высоту анимированного объекта
            const animItemHeight = item.offsetHeight;
            // получаем растояние от верхней границы документа до нашего элемента
            const animItemOffset = item.offsetTop;
            // коэффициент который будет контролировать момент старта анимации 
            const animStart = 4;
            // определяем когда будет выполнятся анимация (высота экрана минус высота объекта поделеное на коэффициент. т.е. посути когда покажется 1/4 от высоты объекта на экране)
            let animItemPoint = innerHeight - animItemHeight / animStart;

            if (animItemHeight > innerHeight){
                animItemPoint =  innerHeight - innerHeight / animStart;
            }
            /* 
            если показатель скрола больше координа по оси Y анимируемого элемента минус animItemPoint и показатель скрола меньше координа по оси Y анимируемого элемента плюс высота элемента то добавляем класс 
            */
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                item.classList.add('_active')
            } else {
                // в случае если нам не нужно повторно проигрывать анимацию добавляем в html класс _anim-no-hide
                if (!item.classList.contains('_anim-no-hide')){
                    item.classList.remove('_active')
                }

            }
        })
    }

    animOnScroll();
}