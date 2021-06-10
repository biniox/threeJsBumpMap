import { PointerLockControls } from './../lib/controls/PointerLockControls.js';
import { Vector3, Color, Raycaster } from './../lib/three.js';
import { camera } from './camera.js'


      let moveForward = false;
      let moveBackward = false;
      let moveLeft = false;
      let moveRight = false;
      let canJump = false;
      let up = false;
      let down = false;


      
      let prevTime = performance.now();
      let raycaster;
      const objects = [];
      const velocity = new Vector3(1,1,1);
      const direction = new Vector3();
      const vertex = new Vector3();
      const color = new Color();


(function() {
    raycaster = new Raycaster( new Vector3(), new Vector3( 0, - 1, 0 ), 0, 10 );
})()

const controls = new PointerLockControls( camera, document.body );

const blocker = document.getElementById( 'blocker' );
const instructions = document.getElementById( 'instructions' );

instructions.addEventListener( 'click', function () {

controls.lock();

} );

controls.addEventListener( 'lock', function () {

instructions.style.display = 'none';
blocker.style.display = 'none';

} );

controls.addEventListener( 'unlock', function () {

blocker.style.display = 'block';
instructions.style.display = '';

} );



const onKeyDown = function ( event ) {

    switch ( event.code ) {
    
    case 'KeyW':
    moveForward = true;
    break;
    
    case 'KeyA':
    moveLeft = true;
    break;
    
    case 'KeyS':
    moveBackward = true;
    break;
    
    case 'KeyD':
    moveRight = true;
    break;
    
    case 'Space':
    if ( canJump === true ) velocity.y += 200;
    canJump = false;
    break;
    
    case 'ArrowUp':
      up = true;
     break;
    
    case 'ArrowDown':
      down = true
      break;
    
    }
    
    };
    
    const onKeyUp = function ( event ) {
    
    switch ( event.code ) {
    
    
    case 'KeyW':
    moveForward = false;
    break;
    
    case 'KeyA':
    moveLeft = false;
    break;
    
    case 'KeyS':
    moveBackward = false;
    break;
    
    case 'KeyD':
    moveRight = false;
    break;
    
    case 'ArrowUp':
      up = false;
     break;
    
    case 'ArrowDown':
      down = false
      break;
    
    }
    
    };

    const setCanJump = v => canJump = v;


    const animateMove = () => {
                    const time = performance.now();

            if ( controls.isLocked === true ) {

            raycaster.ray.origin.copy( controls.getObject().position );
            raycaster.ray.origin.y += 1;

            const intersections = raycaster.intersectObjects( objects );

            const onObject = intersections.length > 0;

            const delta = ( time - prevTime ) / 1000;

            velocity.x -= velocity.x * 30.0 * delta;
            velocity.z -= velocity.z * 30.0 * delta;

            velocity.y -= 9.8 * 25.0 * delta; // 100.0 = mass

            direction.z = Number( moveForward ) - Number( moveBackward );
            direction.x = Number( moveRight ) - Number( moveLeft );
            direction.normalize(); // this ensures consistent movements in all directions

            if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
            if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;
            if ( up ) velocity.y += 40.0 * delta;


            if ( onObject === true ) {

            velocity.y = Math.max( 0, velocity.y );
            setCanJump(true);

            }

            controls.moveRight( - velocity.x * delta );
            controls.moveForward( - velocity.z * delta );
            // controls.moveUp( - velocity.y * delta )

            controls.getObject().position.y += ( velocity.y * delta * 0.05); // new behavior
            if ( down ) controls.getObject().position.y -= 4000.0 * delta;
            if ( controls.getObject().position.y < 1 ) {

            velocity.y = 0;
            controls.getObject().position.y = 1;

            setCanJump(true);

            }

            }

            prevTime = time;
    }

export { controls, onKeyUp, onKeyDown, animateMove, objects }