<% if (requirejs) { %>require({
    baseUrl: 'js',
    // three.js should have UMD support soon, but it currently does not
    shim: { 'vendor/three': { exports: 'THREE' } }
}, [
    'vendor/three'
], function(THREE) {
<% } else { %>(function() {
<% } %>
var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry(200, 200, 200);
    material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);


    function webglAvailable() {
        try {
            var canvas = document.createElement( 'canvas' );
            return !!( window.WebGLRenderingContext && (
            canvas.getContext( 'webgl' ) ||
            canvas.getContext( 'experimental-webgl' ) )
            );
        } catch ( e ) {
            return false;
        }
    }

    if ( webglAvailable() ) {
        renderer = new THREE.WebGLRenderer();
    } else {
        renderer = new THREE.CanvasRenderer();
    }

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

}

function animate() {

    // note: three.js includes requestAnimationFrame shim
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

}

<% if (requirejs) { %>});<% } else { %>})();<% } %>
