$(document).ready(function(){$(".sign-up a").attr("href","javascript:void(0);");$(".tours").click(function(e){e.preventDefault();if($("body").hasClass("home")){var scrollToThis=$(e.target).attr('href');console.log(scrollToThis)
var offset=$(scrollToThis).offset().top;console.log(offset)
$('html, body').animate({scrollTop:offset},3000,"linear",function(){});}
else
{siteurl="http://littledragon.wpengine.com/"+$(e.target).attr('href');window.location.href=siteurl}});$(".sign-up").click(function(e){e.preventDefault();$("#shadow-box").fadeIn();$("#email-input").focus();});$(".videos").click(function(e){e.preventDefault();if($("body").hasClass("home")){var scrollToThis=$(e.target).attr('href');console.log(scrollToThis)
var offset=$(scrollToThis).offset().top;console.log(offset)
$('html, body').animate({scrollTop:offset},2000,"linear",function(){});}
else
{siteurl="http://littledragon.wpengine.com/"+$(e.target).attr('href');window.location.href=siteurl}});$(document).scroll(function(){if($(window).width()>400){var distanceTop=Math.floor($(document).scrollTop()*2);$("#all").css('background-position','0px -'+distanceTop+'px');$("#tours").css('background-position','0px -'+distanceTop+'px');$("#videos").css('background-position','0px -'+distanceTop+'px');}})
var throttleTimeout;$(window).bind('resize',function()
{if(!throttleTimeout){throttleTimeout=setTimeout(function()
{api.reinitialise();throttleTimeout=null;},50);}});});$(window).load(function(){window.dontClose=false;$(document).on({mouseenter:function(){window.dontClose=true;},mouseleave:function(){window.dontClose=false;}},'.dont-close');$("body").on('click','#shadow-box',function(){if(!dontClose){$("#shadow-box").fadeOut();}})});



  // <script src="../build/three.js"></script>

  //   <script src="js/effects/AnaglyphEffect.js"></script>

  //   <script src="js/Detector.js"></script>

  //   <script>
  //     if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
  //     var container;
  //     var camera, scene, renderer, effect;
  //     var mesh, lightMesh, geometry;
  //     var spheres = [];
  //     var directionalLight, pointLight;
  //     var mouseX = 0;
  //     var mouseY = 0;
  //     var windowHalfX = window.innerWidth / 2;
  //     var windowHalfY = window.innerHeight / 2;
  //     document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  //     init();
  //     animate();
  //     function init() {
  //       container = document.createElement( 'div' );
  //       document.body.appendChild( container );
  //       camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 100 );
  //       camera.position.z = 3;
  //       camera.focalLength = 3;
  //       scene = new THREE.Scene();
  //       var geometry = new THREE.SphereBufferGeometry( 0.1, 32, 16 );
  //       var path = "textures/cube/pisa/";
  //       var format = '.png';
  //       var urls = [
  //         path + 'px' + format, path + 'nx' + format,
  //         path + 'py' + format, path + 'ny' + format,
  //         path + 'pz' + format, path + 'nz' + format
  //       ];
  //       var textureCube = new THREE.CubeTextureLoader().load( urls );
  //       var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
  //       for ( var i = 0; i < 500; i ++ ) {
  //         var mesh = new THREE.Mesh( geometry, material );
  //         mesh.position.x = Math.random() * 10 - 5;
  //         mesh.position.y = Math.random() * 10 - 5;
  //         mesh.position.z = Math.random() * 10 - 5;
  //         mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;
  //         scene.add( mesh );
  //         spheres.push( mesh );
  //       }
  //       // Skybox
  //       var shader = THREE.ShaderLib[ "cube" ];
  //       shader.uniforms[ "tCube" ].value = textureCube;
  //       var material = new THREE.ShaderMaterial( {
  //         fragmentShader: shader.fragmentShader,
  //         vertexShader: shader.vertexShader,
  //         uniforms: shader.uniforms,
  //         side: THREE.BackSide
  //       } ),
  //       mesh = new THREE.Mesh( new THREE.BoxGeometry( 100, 100, 100 ), material );
  //       scene.add( mesh );
  //       //
  //       renderer = new THREE.WebGLRenderer( { antialias: false } );
  //       renderer.setPixelRatio( window.devicePixelRatio );
  //       container.appendChild( renderer.domElement );
  //       var width = window.innerWidth || 2;
  //       var height = window.innerHeight || 2;
  //       effect = new THREE.AnaglyphEffect( renderer );
  //       effect.setSize( width, height );
  //       //
  //       window.addEventListener( 'resize', onWindowResize, false );
  //     }
  //     function onWindowResize() {
  //       windowHalfX = window.innerWidth / 2,
  //       windowHalfY = window.innerHeight / 2,
  //       camera.aspect = window.innerWidth / window.innerHeight;
  //       camera.updateProjectionMatrix();
  //       effect.setSize( window.innerWidth, window.innerHeight );
  //     }
  //     function onDocumentMouseMove(event) {
  //       mouseX = ( event.clientX - windowHalfX ) / 100;
  //       mouseY = ( event.clientY - windowHalfY ) / 100;
  //     }
  //     //
  //     function animate() {
  //       requestAnimationFrame( animate );
  //       render();
  //     }
  //     function render() {
  //       var timer = 0.0001 * Date.now();
  //       camera.position.x += ( mouseX - camera.position.x ) * .05;
  //       camera.position.y += ( - mouseY - camera.position.y ) * .05;
  //       camera.lookAt( scene.position );
  //       for ( var i = 0, il = spheres.length; i < il; i ++ ) {
  //         var sphere = spheres[ i ];
  //         sphere.position.x = 5 * Math.cos( timer + i );
  //         sphere.position.y = 5 * Math.sin( timer + i * 1.1 );
  //       }
  //       effect.render( scene, camera );
  //     }
  //   </script>

    <script>

    var scene, camera, renderer;
    var geometry, material, mesh;

    init();
    animate();

    function init() {

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

        geometry = new THREE.BoxGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );

    }

    function animate() {

        requestAnimationFrame( animate );

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render( scene, camera );

    }

</script>


