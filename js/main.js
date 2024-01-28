const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );

camera.position.z = 15; 

//BoxGeometry
const cubeGeometry = new THREE.BoxGeometry( 4, 4, 4 ); 
const cubeMaterial = new THREE.MeshBasicMaterial( { color: "Blue" } ); 
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial ); // 
scene.add( cube ); 

//TorusGeometry
const torusGeometry= new THREE.TorusGeometry( 1, 0.5, 16, 100 ); 
const torusMaterial = new THREE.MeshBasicMaterial( { color: "Turqoise" } ); 
const torus = new THREE.Mesh( torusGeometry, torusMaterial ); scene.add( torus );
scene.add( torus ); //add to the scene

//ConeGeometry
const coneGeometry = new THREE.ConeGeometry( 3, 5, 20 ); 
const coneMaterial = new THREE.MeshBasicMaterial( {color: "Brown"} );
const cone = new THREE.Mesh(coneGeometry, coneMaterial ); scene.add( cone );
scene.add(cone);

//SphereGeometry
const sphereGeometry = new THREE.SphereGeometry( 3, 32, 16); 
const sphereMaterial = new THREE.MeshBasicMaterial( { color: "SkyBlue"} ); 
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial ); scene.add( sphere );
scene.add(sphere);

//cylinderGeometry
const cylinderGeometry = new THREE.CylinderGeometry( 3, 3, 3, 32 ); 
const cylinderMaterial = new THREE.MeshBasicMaterial( {color: "Indigo"} ); 
const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial ); scene.add( cylinder );
scene.add(cylinder);


//Object Positioning
cube.position.x = -10;
cube.position.y = 8;

torus.position.x = -10;
torus.position.y = -5;

cone.position.x = 1;
cone.position.y = 1;

sphere.position.x = 10;
sphere.position.y = 8;

cylinder.position.x = 9;
cylinder.position.y = -5;

//Simple Animation
function animate() {
	requestAnimationFrame( animate );

    //start animation
    cube.rotation.x += 1.01;
    cube.rotation.y += 5.01;
   

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    torus.rotation.z += 0.01;  

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    cone.rotation.z += 0.01;  

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;  

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    cylinder.rotation.z += 0.01; 



	renderer.render( scene, camera );
}
animate();





