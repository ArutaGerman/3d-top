Папка src — используется во время разработки:
- БЭМ-блоки: src/blocks
- шрифты: src/fonts
- изображения: src/img
- JS-файлы: src/js
- страницы сайта: src/views/pages
- SCSS-файлы: src/styles
- HTML-файлы: src/views



Для запуска проекта необходимо:
- скачать зависимости npm i
- Для запуска проекта ввести "gulp"

Компиляция svg-sprites.
При запуске команды "gulp" svg спрайты не компилируются!
- Для компиляции svg sprites отдельно ввести "gulp svgSprite"

Компиляция svg занимает долгое время (зависит от машины), сначала нужно дождаться пока в консоли появится сообщение о завершении обработки картинок, после чего можно приступать к работе
