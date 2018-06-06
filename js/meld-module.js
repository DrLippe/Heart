// JavaScript Document
function meldModule(){
  'use strict';

  // Global Variables
  var kmd = window.kmd, krs = window.kristall, kmdloc = window.kmdloc, affinity = [], higherid = "", fusecontainerMinHeight = [], currentMinHeight;
  currentLocale = getLanguage();
  
  function updateLanguage() { $('#' + currentId).trigger('click'); console.log($('#' + currentId)) }
  
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
  $('skillcontainer').children().click(function (){
    currentLocale = getLanguage();
    // Add Open / Close Function to fusecontainer  
    if ( fusecontainerStatus === 'closed' || 'full') {
      $('fusecontainer').css('height', 30);
      fusecontainerStatus = 'open';
    }
    
    currentId = this.id;
    if ( $(this).children('selector').length === 1 ) {
    } else {
      // Name Selected Command
      $('commandname').html(nameMe(currentId, currentLocale));
      // Add respective Icon to Commandname Element: Call Function
      iconMe(currentId, 'commandname');
      
      // Mark Selected Command
      var newOffset = $(this).offset();
      if( $('container').children('fireflycontainer').length < 1) {
        $('container').append('<fireflycontainer><firefly style="animation-delay: ' + Math.random() * -10 + 's;"></firefly></fireflycontainer>');
      }
      if( $('skillcontainer').children().children('selector').length < 1 ) {
        $(this).append('<selector></selector>');
        $('container').children('fireflycontainer').css('left', newOffset.left).css('top', newOffset.top);
      } else {
        $(this).append($('selector'));
        $('container').children('fireflycontainer').stop().animate( {'top': newOffset.top, 'left':newOffset.left}, 'slow');
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
          
           for ( var j in krs[type] ) {
            addType +=  '<fusecrystal class="krs ' + j + '">' + nameMe([j], currentLocale) + '</fusecrystal><fusecrystal class="abi">' + nameMe(krs[type][j], currentLocale) + '</fusecrystal>';
          }
          if ( /s\d{3}/.test(currentId) ) {
            fusecontainerMinHeight.push(fusecontainerMinHeight.pop() - 210);
          }
          
          addAffinity = kmd[currentId].fusion[i].ventus + kmd[currentId].fusion[i].aqua + kmd[currentId].fusion[i].terra;
        
          matId.push(findMe(kmd[currentId].fusion[i].mat1), findMe(kmd[currentId].fusion[i].mat2));
          fuse.push(addFuse);
          fuseType.push(addType);
          affinity.push(addAffinity);
          meldModule.affinity = affinity;
        
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
      $('fusetab').first().attr('class', 'active');
      
      var newOffset = $('fusetab').first().offset();
      $('fusetab-bar').append('<fireflycontainer><firefly></firefly></fireflycontainer>');
      $('fusetab-bar').children('fireflycontainer').css('left', $('fusetab').width() + $('fusetab').first().position().left - 40).css('top', 30);
      
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
      console.warn('Error: ' + this);
    }
    
  });
  // Expand / Restrain Fusecontainer
  $('commandname').click(function(){
    currentLocale = getLanguage();
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
    currentLocale = getLanguage();
    $('.active').attr('class', 'inactive');
    $('fusetab-bar').children('fireflycontainer').stop().animate( {'left': $('fusetab').width() + $(this).position().left - 40 }, 'slow');
    $(this).attr('class', 'active');  // 3rd Child is Firefly
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
  meldModule.affinityMe = affinityMe;
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
  
  // Localize
  meldModule.nameMe = nameMe;
  function nameMe(id, loc) {
    var name;
    if ( !localization[id] && kmd[id] ) { return kmd[id].name; }
    else if ( !localization[id][localization.locale.indexOf(loc)]  ) { 
      if ( !localization[id][2] ) { return kmd[id].name; }
      else { return localization[id][2]; }
    }
    else { return localization[id][localization.locale.indexOf(loc)]; }
  }

  // TODO: create Language changer
  // TODO: localize Crystals & Abilities
  // TODO: update Names with Language

}