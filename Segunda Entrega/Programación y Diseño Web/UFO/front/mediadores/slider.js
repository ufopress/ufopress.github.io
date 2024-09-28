let currentSlide = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        const s1 = document.getElementById("Slide1");
        const s2 = document.getElementById("Slide2");
        const s3 = document.getElementById("Slide3");
        s1.src = "slider/DiaNino.png";
        s2.src = "slider/Copa.png"
        s3.src = "slider/Spider.png"
        function showSlide(index) {
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        setInterval(nextSlide, 5000); // Cambia de slide cada 3 segundos