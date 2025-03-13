// script of login page starts

// Redirect function
function redirectToMenu() {
    window.location.href = 'pages/menu.html';
}

// Three.js 3D Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs-container').appendChild(renderer.domElement);

// Add floating geometry
const geometry = new THREE.IcosahedronGeometry(2, 1);
const material = new THREE.MeshPhongMaterial({
    color: 0x2ecc71,
    shininess: 100,
    transparent: true,
    opacity: 0.3
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add lights
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();

// Resize handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

    // login validation:
        function initParticles() {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('threejs-container').appendChild(renderer.domElement);

            const particles = new THREE.BufferGeometry();
            const particleCount = 5000;
            const posArray = new Float32Array(particleCount * 3);

            for(let i = 0; i < particleCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 5;
            }

            particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const material = new THREE.PointsMaterial({
                size: 0.005,
                color: new THREE.Color(0.2, 0.8, 0.8),
                transparent: true,
                opacity: 0.7
            });

            const particleMesh = new THREE.Points(particles, material);
            scene.add(particleMesh);

            camera.position.z = 3;

            function animate() {
                requestAnimationFrame(animate);
                particleMesh.rotation.x += 0.001;
                particleMesh.rotation.y += 0.001;
                renderer.render(scene, camera);
            }

            animate();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        }
    initParticles();
    // Form Validation
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = Array.from(this.querySelectorAll('input'));
        let isValid = true;

        inputs.forEach(input => {
            input.classList.remove('error');
            if(!input.checkValidity()) {
                input.classList.add('error');
                isValid = false;
            }
        });

        if(isValid) {
            this.classList.add('processing');
            setTimeout(() => {
                window.location.href = 'pages/menu.html';
            }, 1500);
        }
    });

// Function to redirect (modify as needed)
function redirectToMenu() {
    window.location.href = "pages/menu.html"; // Change this to your actual redirection page
}

// script of login page ends
