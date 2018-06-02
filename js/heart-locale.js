var currentLocale;
function getLanguage() {
    var lang ='';
    if ( /de/.test(navigator.language) ) { lang = 'de'; }
    else if ( /fr/.test(navigator.language) ) { lang = 'fr'; }
    else if ( /ja/.test(navigator.language) ) { lang = 'ja'; }
    else { lang = 'en'; }
    
    console.log('Language is set to:' + lang + ' // navigator: ' + navigator.language);
    return lang;
}

var kmdloc = {
    locale: ['ja', 'en', 'de', 'fr'],
    'p001': ['エリアルブレイク', 'Quick Blitz', 'Schwertfall', ''],
    'p002': ['ファイナルブレイク ', 'Blitz', 'Schwertfallserie', ''],
    'p003': ['メテオバースト', 'Meteor Crash', 'Meteorsalve', ''],
    'p004': ['マジックアワー', 'Magic Hour', 'Zauberstunde', ''],
    'p005': ['', '', 'Sturmlauf', ''],
    'p006': ['', '', 'Feuersturmlauf', ''],
    'p007': ['', '', 'Dunkler Dunst', ''],
    'p008': ['', '', 'Schallschock', ''],
    'p009': ['', '', 'Chaosschock', ''],
    'p010': ['', '', 'Zantetsuken', ''],
    'p011': ['', '', 'Schwertwurf', ''],
    'p012': ['', '', 'Frostwurf', ''],
    'p013': ['', '', 'Schatzwurf', ''],
    'p014': ['', '', 'Spaltwurf', ''],
    'p015': ['', '', 'Multiwurf', ''],
    'p016': ['', '', 'Feuersturz', ''],
    'p017': ['', '', 'Barrierensturz', ''],
    'p018': ['', '', 'Blitzsturz', ''],
    'p019': ['', '', 'Luftstakkato', ''],
    'p020': ['', '', 'Ars Solum', ''],
    'p021': ['', '', 'Ars Arcanum', ''],
    'p022': ['', '', 'Zeitspleißer', ''],
    'p023': ['', '', 'Giftklinge', ''],
    'p024': ['', '', 'Wunschklinge', ''],
    'p025': ['', '', 'Eisklinge', ''],
    'p026': ['', '', 'Betäubungsklinge', ''],
    'p027': ['', '', 'Glücksklinge', ''],
    'p028': ['', '', 'Feuerschlag', ''],
    'p029': ['', '', 'Verwirrschlag', ''],
    'p030': ['', '', 'Fesselschlag', ''],
    'p031': ['', '', 'Tornadoschlag', ''],
    'p032': ['', '', 'Schmetterklinge', ''],
    'p033': ['', '', 'Magnetspirale', ''],
    'p034': ['', '', 'Windschneider', ''],
    'p035': ['', '', 'Grenzsturm', ''],
    'p036': ['', '', 'Erlösung', ''],
    'p037': ['', '', 'Kollisionsmagnet', ''],
    'p038': ['', '', 'Geo-Fall', ''],
    'p039': ['', '', 'Selbstopfer', ''],
    'p040': ['', '', 'Auszeit', ''],
}