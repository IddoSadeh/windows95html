const scenes = ['scene1', 'scene2', 'scene3'];
let currentScene = 0;

function showNextScene() {
    if (currentScene < scenes.length) {
        document.getElementById(scenes[currentScene]).classList.remove('active');
        currentScene++;
        if (currentScene < scenes.length) {

            // Change background for scene2
            if (currentScene === 1) {
                document.body.style.backgroundImage = "url('imgs/indeximgs/clouds.jpg')";
                showProgressBarTransition(); // Call progress bar transition for scene 2
            } else {
                document.body.style.backgroundColor = 'black';
                document.body.style.backgroundImage = ''; // Reset background image
            }

            document.getElementById(scenes[currentScene]).classList.add('active');

            let sceneDuration = 3000; // Final scene should last 2 seconds
            if (currentScene === 1) {
                sceneDuration = 4500; // Scene 2 should last 3 seconds (1s for each progress bar)
            }

            setTimeout(showNextScene, sceneDuration);
        } else {
            window.location.href = 'desktop.html'; // Load main page after the last scene
        }
    }
}

function showProgressBarTransition() {
    const progressBar = document.querySelector('.progressbar');
    setTimeout(() => {
        progressBar.src = 'imgs/indeximgs/progressBar2.png';
    }, 1500); // Change to Progressbar2 after 1 second

    setTimeout(() => {
        progressBar.src = 'imgs/indeximgs/progressBar3.png';
    }, 3000); // Change to Progressbar3 after 2 seconds
}

setTimeout(showNextScene, 2500); // First scene lasts 2 seconds