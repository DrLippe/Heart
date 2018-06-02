// JavaScript Document
$(document).ready(function(){
  'use strict';
  
  // Add Header
  $('body').prepend('<header></header>');
  // Header Sticky to Top
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 1) { $('header').addClass('sticky'); }
    else{ $('header').removeClass('sticky'); }
  });
  
  // Add Content-Container
  $('header').after('<container></container>');
  
  // Global Variables
  var kmd = window.kmd, krs = window.kristall, kmdloc = window.kmdloc, affinity = [], higherid = "", fusecontainerMinHeight = [], currentMinHeight, currentLocale = 'ja';
  
  // List all Commands  
  if ( $('skillcontainer').length === 0) {
    for ( var i in kmd ) {
      // List Physical Commands
      if ( /p\d{3}/.test(i) ) {
        if ( $('skillcontainer').children('physical').length === 0 ) { $('container').append('<skillcontainer></skillcontainer>');}
        $('skillcontainer').last().append('<physical id="' + i + '"></physical>');
      } else
      // List Magical Commands
      if ( /m\d{3}/.test(i) ) {
        if ( $('skillcontainer').children('magical').length === 0 ) { $('container').append('<skillcontainer></skillcontainer>');}
        $('skillcontainer').last().append('<magical id="' + i + '"></magical>');
      } else
      // List Movement Commands
      if ( /a\d{3}/.test(i) ) {
        if ( $('skillcontainer').children('movement').length === 0 ) { $('container').append('<skillcontainer></skillcontainer>');}
        $('skillcontainer').last().append('<movement id="' + i + '"></movement>');
      } else
      // List Defense Commands
      if ( /d\d{3}/.test(i) ) {
        if ( $('skillcontainer').children('defense').length === 0 ) { $('container').append('<skillcontainer></skillcontainer>');}
        $('skillcontainer').last().append('<defense id="' + i + '"></defense>');
      } else
      // List Friend Commands
      if ( /f\d{3}/.test(i) ) {
        if ( $('skillcontainer').children('friend').length === 0 ) { $('container').append('<skillcontainer></skillcontainer>');}
        $('skillcontainer').last().append('<friend id="' + i + '"></friend>');
      } else
      /*
      // List Potion Commands
      if ( /i\d{3}/.test(i) ) {
        if ( $('skillcontainer').children('potion').length === 0 ) { $('container').append('<skillcontainer></skillcontainer>');}
        $('skillcontainer').last().append('<potion id="' + i + '"></potion>');
      }  else
      */
      // List Reprisal Commands
      if ( /r\d{3}/.test(i) ) {
        if ( $('skillcontainer').children('reprisal').length === 0 ) { $('container').append('<skillcontainer></skillcontainer>');}
        $('skillcontainer').last().append('<reprisal id="' + i + '"></reprisal>');
      } else
      // List Shotlock Commands
      if ( /s\d{3}/.test(i) ) {
        if ( $('skillcontainer').children('shotlock').length === 0 ) { $('container').append('<skillcontainer></skillcontainer>');}
        $('skillcontainer').last().append('<shotlock id="' + i + '"></shotlock>');
      }
    }
    $('skillcontainer').last().after('<fusecontainer><commandname></commandname></fusecontainer>');
  }
  
  // Fusecontainer Status
  var fusecontainerStatus = 'closed', currentId;
  $('skillcontainer').children().click(function(){
    // Add Open / Close Function to fusecontainer  
    if ( fusecontainerStatus === 'closed' || 'full') {
      $('fusecontainer').css('height', 30);
      fusecontainerStatus = 'open';
    }
    
    currentId = this.id;
    if ( $(this).children('firefly').length === 1 ) {}
    else {
      // Name Selected Command
      $('commandname').html(nameMe(currentId, currentLocale));
      // Add respective Icon to Commandname Element: Call Function
      iconMe(currentId, 'commandname');
      
      // Mark Selected Command
      if ( $('skillcontainer').children().children('firefly').length < 1) {
        $(this).append('<firefly style="animation-delay: ' + Math.random() * -10 + 's;"></firefly><selector></selector>');
      } else {
        $(this).append($('skillcontainer').children().children());
      }
    }
    
    // Add Meld 
    // Check for Fusions
    $('fusetab-bar').remove();
    $('fusebody').remove();
    if ( kmd[currentId].fusion ) {
      var fuse = [], matId = [], fuseType = [], higherId = [];
          affinity = [];
          fusecontainerMinHeight = [];
      
      $('fusecontainer').append('<fusetab-bar></fusetab-bar>');
      for ( var i in kmd[currentId].fusion ) {
        if ( kmd[currentId].fusion[i]) {
          var addFuse = "", type = kmd[currentId].fusion[i].type, addType = "", addAffinity = "", lvl1 = "", lvl2 = "";
          
          if ( kmd[currentId].fusion[i].lvl1 === "" ) { lvl1 = ""; } else { lvl1 = ' Lvl ' + kmd[currentId].fusion[i].lvl1; }
          if ( kmd[currentId].fusion[i].lvl2 === "" ) { lvl2 = ""; } else { lvl2 = ' Lvl ' + kmd[currentId].fusion[i].lvl2; }
        
          addFuse = '<fusecommand>' + nameMe(findMe(kmd[currentId].fusion[i].mat1), currentLocale) + '<fuselvl>'+ lvl1 +'</fuselvl></fusecommand>' + 
                    '<fusecommand>' + nameMe(findMe(kmd[currentId].fusion[i].mat2), currentLocale) + '<fuselvl>'+ lvl2 +'</fuselvl></fusecommand>';
        
          // Check for Higher / Lower Melds
          if ( kmd[currentId].fusion[i].chance !== "100" ) {
            addFuse += checkMeld( currentId, kmd[currentId].fusion[i].mat1, kmd[currentId].fusion[i].mat2 );
            higherId.push(higherid);
            fusecontainerMinHeight.push(340);
          }
          else {
            fusecontainerMinHeight.push(310);
          }
          addType = 
            '<fusecrystal class="krs leucht">Leuchtkristall</fusecrystal><fusecrystal class="abi">'+ krs[type].leucht +'</fusecrystal>' +
            '<fusecrystal class="krs zeit">Zeitkristall</fusecrystal><fusecrystal class="abi">'+ krs[type].zeit +'</fusecrystal>' +
            '<fusecrystal class="krs kraft">Kraftkristall</fusecrystal><fusecrystal class="abi">'+ krs[type].kraft +'</fusecrystal>' +
            '<fusecrystal class="krs energie">Energiekristall</fusecrystal><fusecrystal class="abi">'+ krs[type].energie +'</fusecrystal>' +
            '<fusecrystal class="krs luna">Lunakristall</fusecrystal><fusecrystal class="abi">'+ krs[type].luna +'</fusecrystal>' +
            '<fusecrystal class="krs freuden">Freudenkristall</fusecrystal><fusecrystal class="abi">'+ krs[type].freuden +'</fusecrystal>' +
            '<fusecrystal class="krs zyklus">Zykluskristall</fusecrystal><fusecrystal class="abi">'+ krs[type].zyklus +'</fusecrystal>';
          
          if ( /s\d{3}/.test(currentId) ) {
            fusecontainerMinHeight.push(fusecontainerMinHeight.pop() - 210);
          }
          
          addAffinity = kmd[currentId].fusion[i].ventus + kmd[currentId].fusion[i].aqua + kmd[currentId].fusion[i].terra;
        
          matId.push(findMe(kmd[currentId].fusion[i].mat1), findMe(kmd[currentId].fusion[i].mat2));
          fuse.push(addFuse);
          fuseType.push(addType);
          affinity.push(addAffinity);
        
          $('fusetab-bar').append('<fusetab class="inactive">'+ i +'</fusetab>');
          
        }
      }
      // Add Fusebodies for every Fusion available
      for ( var j = 0; j < fuse.length; j++ ) {
        $('fusecontainer').append('<fusebody id="' + j + '" class="hide">' + fuse[j] + fuseType[j] + '</fusebody>');
        for ( var k = 0; k < matId.length; k++ ) { iconMe( matId[k], $('fusecommand:nth(' + k + ')')); }
        for ( var l = 0; l < higherId.length; l++ ) { iconMe( higherId[l], $('highermeld:nth(' + l + ')')); }
      }
      $('fusetab').css('width', 'calc(100% / ' + $('fusetab').length + ')');
      
      // Set Tab 1 Active as Default
      $('fusetab').first().attr('class', 'active').append('<firefly></firefly>');
      $('fusebody').first().attr('class', 'show');
      $('commandname').children('ventus, aqua,terra').remove();
      $('commandname').append(affinityMe(affinity[0]));
      currentMinHeight = fusecontainerMinHeight[0];
    }
    else if ( !kmd[currentId].fusion ) {
      affinity = [];
      affinity.push(kmd[currentId].ventus + kmd[currentId].aqua + kmd[currentId].terra); 
      $('commandname').children('ventus, aqua,terra').remove();
      $('commandname').append(affinityMe(affinity[0]));
    }
    else {
      // Throw Error
      console.warn('Error');
    }
    
  });
  // Expand / Restrain Fusecontainer
  $('commandname').click(function(){
    if ( fusecontainerStatus === 'open' && kmd[currentId].fusion ) {
      $('fusecontainer').css('height', currentMinHeight);
      fusecontainerStatus = 'full';
    } else {
      $('fusecontainer').css('height', 30);
      fusecontainerStatus = 'open';
    }
  });
  // Add Function to Fusetabs
  $('fusecontainer').on('click', '.inactive', function(){
    $('.active').attr('class', 'inactive');
    $(this).attr('class', 'active').append($('fusecontainer').children().children().children('firefly'));  // 3rd Child is Firefly
    $('.show').attr('class', 'hide');
    $('#' + $('fusetab').index( $(this) ) ).attr('class', 'show');
    // Adjust Fusecontainer MinHeight
    $('fusecontainer').css('height', fusecontainerMinHeight[ $('fusetab').index( $(this) ) ] ); 
    // Add Affinity 
    $('commandname').children('ventus, aqua, terra').remove();
    $('commandname').append(affinityMe(affinity[ $('fusetab').index( $(this) ) ]));
  });

  // Add respective Icon to Commandname Element
  function iconMe(currentId, element) {
    if ( /p\d{3}/.test(currentId) ) { $(element).attr('class', 'physical'); } else
    if ( /m\d{3}/.test(currentId) ) { $(element).attr('class', 'magical'); } else
    if ( /a\d{3}/.test(currentId) ) { $(element).attr('class', 'movement'); } else
    if ( /d\d{3}/.test(currentId) ) { $(element).attr('class', 'defense'); } else
    if ( /f\d{3}/.test(currentId) ) { $(element).attr('class', 'friend'); } else
    if ( /i\d{3}/.test(currentId) ) { $(element).attr('class', 'potion'); } else
    if ( /r\d{3}/.test(currentId) ) { $(element).attr('class', 'reprisal'); } else
    if ( /s\d{3}/.test(currentId) ) { $(element).attr('class', 'shotlock'); } 
    else { $(element).attr('class', 'error'); }
  }

  // Find Command ID with its Name
  function findMe(currentName){
    for ( var i in kmd ) {
      if ( kmd[i].name === currentName ) { return kmd[i].id; }
    }
  }
  
  // Affinity
  function affinityMe(data){
    var result = "";
    if ( data.slice(0,1) === '1' ) { result += "<ventus></ventus>"; }
    if ( data.slice(1,2) === '1' ) { result += "<aqua></aqua>"; }
    if ( data.slice(2,3) === '1' ) { result += "<terra></terra>"; }
    return result;
  }
  
  // Check for Higher / Lower Meld
  function checkMeld(id, mat1, mat2){
    
    var highermeld = "", chance = "", affinityStatus = "";
        higherid = "";
    
    for ( var i in kmd ){
      if ( i !== id ) {
        for ( var j in kmd[i].fusion ){
          if ( kmd[i].fusion[j].mat1 === mat1 && kmd[i].fusion[j].mat2 === mat2 || kmd[i].fusion[j].mat1 === mat2 && kmd[i].fusion[j].mat2 === mat1 ){
            highermeld = kmd[i].name;
            higherid = kmd[i].id;
            chance = kmd[i].fusion[j].chance;
            affinityStatus = kmd[i].fusion[j].ventus + kmd[i].fusion[j].aqua + kmd[i].fusion[j].terra;
          }
        }
      }
    }
    if ( highermeld === "" ) { 
      console.warn('checkMeld: missing command / highermeld not found: ' + mat1 + ' & ' + mat2); return "";
    }   
    else if ( /\d{3}/.test( affinityStatus ) === false || /\d{4,}/.test( affinityStatus ) === true ) {
      console.warn('checkMeld: affinityStatus: Error: ' + affinityStatus ); return "";
    } else {
      return '<highermeld><highermeldname>' + nameMe(higherid, currentLocale) + '</highermeldname><chance> ' + chance + '% </chance>' + affinityMe(affinityStatus) + '</highermeld>';
    }
    
  }
  
  function nameMe(id, loc) {
    var name;
    if ( !kmdloc[id] && kmd[id] ) { return kmd[id].name; }
    else if ( !kmdloc[id][kmdloc.locale.indexOf(loc)]  ) { return kmdloc[id][2]; }
    else { return kmdloc[id][kmdloc.locale.indexOf(loc)]; }
  }

  // TODO: create Language changer
  // TODO: localize Crystals & Abilities
  // TODO: update Names with Language

});