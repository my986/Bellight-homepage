document.addEventListener('keydown', function (e) {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    }

    // キー入力によるスクロール
    document.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) {
            currentSection++;
        } else {
            currentSection--;
        }
        scrollToSection(currentSection);
    });

    // 上下矢印キーでスクロール
    if (e.key === 'ArrowDown') {
        currentSection++;
    } else if (e.key === 'ArrowUp') {
        currentSection--;
    }
    scrollToSection(currentSection);
});
