var currentLocale, 
    languageOverwrite = '';
    
function changeLanguage(lang) { languageOverwrite = lang; }

function getLanguage() {
    var lang ='';
    if ( /de/.test(navigator.language) ) { lang = 'de'; }
    else if ( /fr/.test(navigator.language) ) { lang = 'fr'; }
    else if ( /ja/.test(navigator.language) ) { lang = 'ja'; }
    else { lang = 'en'; }
    
    //language overwrite
    if ( languageOverwrite ) { lang = languageOverwrite; }
    
    return lang;
}

var localization = {
    locale: ['ja', 'en', 'de', 'fr'],
    // physical commands
    'p001': ['エリアルブレイク', 'Quick Blitz', 'Schwertfall', ''],
    'p002': ['ファイナルブレイク ', 'Blitz', 'Schwertfallserie', ''],
    'p003': ['メテオバースト', 'Meteor Crash', 'Meteorsalve', ''],
    'p004': ['マジックアワー', 'Magic Hour', 'Zauberstunde', ''],
    'p005': ['スライドダッシュ', 'Sliding Dash', 'Sturmlauf', ''],
    'p006': ['ファイアダッシュ', 'Fire Dash', 'Feuersturmlauf', ''],
    'p007': ['ダークヘイズ', 'Dark Haze', 'Dunkler Dunst', ''],
    'p008': ['ソニックレイヴ', 'Sonic Blade', 'Schallschock', ''],
    'p009': ['カオスレイヴ', 'Chaos Blade', 'Chaosschock', ''],
    'p010': ['ザンテツケン', 'Zantetsuken', 'Zantetsuken', ''],
    'p011': ['ストライクレイド', 'Strike Raid', 'Schwertwurf', ''],
    'p012': ['フリーズレイド', 'Freeze Raid', 'Frostwurf', ''],
    'p013': ['トレジャーレイド ', 'Treasure Raid', 'Schatzwurf', ''],
    'p014': ['スパークレイド ', 'Spark Raid', 'Spaltwurf', ''],
    'p015': ['ウインドレイド', 'Wind Raid', 'Multiwurf', ''],
    'p016': ['ファイアブリッツ', 'Fire Surge', 'Feuersturz', ''],
    'p017': ['リフレクブリッツ', 'Barrier Surge', 'Barrierensturz', ''],
    'p018': ['サンダーブリッツ', 'Thunder Surge', 'Blitzsturz', ''],
    'p019': ['エリアルスラム', 'Aerial Slam', 'Luftstakkato', ''],
    'p020': ['ソロアルカナム', 'Ars Solum', 'Ars Solum', ''],
    'p021': ['ラストアルカナム', 'Ars Arcanum', 'Ars Arcanum', ''],
    'p022': ['タイムスプライサー', 'Time Splicer', 'Zeitspleißer', ''],
    'p023': ['ポイズンブレード', 'Poison Edge', 'Giftklinge', ''],
    'p024': ['ウィッシュブレード', 'Wishing Edge', 'Wunschklinge', ''],
    'p025': ['ブリザドブレード', 'Blizzard Edge', 'Eisklinge', ''],
    'p026': ['スタンブレード', 'Stun Edge', 'Betäubungsklinge', ''],
    'p027': ['スロットブレード', 'Slot Edge', 'Glücksklinge', ''],
    'p028': ['ファイアストライク', 'Fire Strike', 'Feuerschlag', ''],
    'p029': ['コンフュストライク', 'Confusion Strike', 'Verwirrschlag', ''],
    'p030': ['バインドストライク', 'Binding Strike', 'Fesselschlag', ''],
    'p031': ['トルネドストライク', 'Tornado Strike', 'Tornadoschlag', ''],
    'p032': ['ブルータルブラスト', 'Brutal Blast', 'Schmetterklinge', ''],
    'p033': ['マグネスパイラル', 'Magnet Spiral', 'Magnetspirale', ''],
    'p034': ['ウインドカッター', 'Windcutter', 'Windschneider', ''],
    'p035': ['リミットストーム', 'Limit Storm', 'Grenzsturm', ''],
    'p036': ['ホーリーライズ', 'Salvation', 'Erlösung', ''],
    'p037': ['マグネクラッシュ', 'Collision Magnet', 'Kollisionsmagnet', ''],
    'p038': ['ガイアブレイク', 'Geo Impact', 'Geo-Fall', ''],
    'p039': ['ソウルリリース', 'Sacrifice', 'Selbstopfer', ''],
    'p040': ['ブレイクタイム', 'Break Time', 'Auszeit', ''],
    // magic commands
    'm001': ['ファイア', 'Fire', 'Feuer', ''],
    'm002': ['ファイラ', 'Fira', 'Feura', ''],
    'm003': ['ファイガ', 'Firaga', 'Feuga', ''],
    'm004': ['ダークファイガ', 'Dark Firaga', '', ''],
    'm005': ['クラッカーファイガ', 'Fission Firaga', '', ''],
    'm006': ['トリプルファイガ', 'Triple Firaga', '', ''],
    'm007': ['バレッジファイア', 'Crawling Fire', '', ''],
    'm008': ['ブリザド', 'Blizzard', '', ''],
    'm009': ['ブリザラ', 'Blizzara', '', ''],
    'm010': ['ブリザガ', 'Blizzaga', '', ''],
    'm011': ['トリプルブリザガ', 'Triple Blizzaga', '', ''],
    'm012': ['サンダー', 'Thunder', '', ''],
    'm013': ['サンダラ', 'Thundara', '', ''],
    'm014': ['サンダガ', 'Thundaga', '', ''],
    'm015': ['サンダガショット', 'Thundaga Shot', '', ''],
    'm016': ['ケアル', 'Cure', '', ''],
    'm017': ['ケアルラ', 'Cura', '', ''],
    'm018': ['ケアルガ', 'Curaga', '', ''],
    'm019': ['エスナ', 'Esuna', '', ''],
    'm020': ['デトネシールド', 'Mine Shield', '', ''],
    'm021': ['デトネスクウェア', 'Mine Square', '', ''],
    'm022': ['デトネチェイサー', 'Seeker Mine', '', ''],
    'm023': ['ゼログラビデ', 'Zero Gravity', '', ''],
    'm024': ['ゼログラビラ', 'Zero Gravira', '', ''],
    'm025': ['ゼログラビガ', 'Zero Graviga', '', ''],
    'm026': ['マグネ', 'Magnet', '', ''],
    'm027': ['マグネラ', 'Magnera', '', ''],
    'm028': ['マグネガ', 'Magnega', '', ''],
    'm029': ['マニーマグネ', 'Munny Magnet', '', ''],
    'm030': ['エナジーマグネ', 'Energy Magnet', '', ''],
    'm031': ['Dリンクマグネ', 'D-Link Magnet', '', ''],
    'm032': ['エアロ', 'Aero', '', ''],
    'm033': ['エアロラ', 'Aerora', '', ''],
    'm034': ['エアロガ', 'Aeroga', '', ''],
    'm035': ['デジョン', 'Warp', '', ''],
    'm036': ['ホーリー', 'Faith', '', ''],
    'm037': ['フリーズ', 'Deep Freeze', '', ''],
    'm038': ['グレイシャルアーツ', 'Glacier', '', ''],
    'm039': ['アイスバラージュ', 'Ice Barrage', '', ''],
    'm040': ['ファイガバースト', 'Firaga Burst', '', ''],
    'm041': ['レイジングストーム', 'Raging Storm', '', ''],
    'm042': ['トルネド', 'Tornado', '', ''],
    'm043': ['メガフレア', 'Mega Flare', '', ''],
    'm044': ['クエイク', 'Quake', '', ''],
    'm045': ['メテオ', 'Meteor', '', ''],
    'm046': ['アトモスブレイク', 'Transcendence', '', ''],
    'm047': ['ミニマム', 'Mini', '', ''],
    'm048': ['ブラックアウト', 'Blackout', '', ''],
    'm049': ['スナイプバーニング', 'Ignite', '', ''],
    'm050': ['コンフュ', 'Confuse', '', ''],
    'm051': ['バインド', 'Bind', '', ''],
    'm052': ['ポイズン', 'Poison', '', ''],
    'm053': ['スロウ', 'Slow', '', ''],
    'm054': ['ストップ', 'Stop', 'Stopp', ''],
    'm055': ['ストプラ', 'Stopra', 'Stoppra', ''],
    'm056': ['ストプガ ', 'Stopga', 'Stoppga', ''],
    'm057': ['スリプル', 'Sleep', 'Schlaf', ''],
    //movement
    'a001': ['ジャンプ','Jump'],
    'a002': ['ハイジャンプ','High Jump'],
    'a003': ['ドッジロール','Dodge Roll'],
    'a004': ['サンダーロール','Thunder Roll'],
    'a005': ['ホイールロール','Cartwheel'],
    'a006': ['ファイアロール','Firewheel'],
    'a007': ['エアスライド','Air Slide'],
    'a008': ['アイススライド','Ice Slide'],
    'a009': ['ソニックスライド','Sonic Impact'],
    'a010': ['スライド','Slide'],
    'a011': ['スライドターン','Reversal'],
    'a012': ['グライド','Glide'],
    'a013': ['スーパーグライド','Superglide'],
    'a014': ['ファイアグライド','Fire Glide'],
    'a015': ['コンボスライド','Homing Slide'],
    'a016': ['テレポ','Teleport'],
    'a017': ['ダブルフライト','Doubleflight'],
    //defense
    'd001': ['リフレクトガード', 'Block'],
    'd002': ['レストアガード', 'Renewal Block'],
    'd003': ['チャージガード', 'Focus Block'],
    'd004': ['スタンガード', 'Stun Block'],
    'd005': ['ポイズンガード', 'Poison Block'],
    'd006': ['リフレク', 'Barrier'],
    'd007': ['レストアバリア', 'Renewal Barrier'],
    'd008': ['チャージバリア', 'Focus Barrier'],
    'd009': ['コンフュバリア', 'Confuse Barrier'],
    'd010': ['ストップバリア', 'Stop Barrier'],
    //reprisal
    'r001': ['リベンジスタンプ', 'Counter Hammer'],
    'r002': ['リベンジファング', 'Payback Fang'],
    'r003': ['リベンジラッシュ', 'Counter Rush'],
    'r004': ['ターンスラッシュ', 'Reversal Slash'],
    'r005': ['リベンジレイド', 'Payback Raid'],
    'r006': ['バリアクラッカー', 'Counter Blast'],
    'r007': ['リベンジブリッツ', 'Payback Surge'],
    'r008': ['エアリカバリー', 'Aerial Recovery'],
    //shotlock
    's001': ['メテオシャワー', 'Meteor Shower'],
    's002': ['フレイムバースト', 'Flame Salvo'],
    's003': ['カオススネーク', 'Chaos Snake'],
    's004': ['ブラックボレー', 'Dark Volley'],
    's005': ['バブルブラスト', 'Bubble Blaster'],
    's006': ['ラグナロク', 'Ragnarok'],
    's007': ['サンダーストーム', 'Thunderstorm'],
    's008': ['バイオバラージュ', 'Bio Barrage'],
    's009': ['パルスボム', 'Pulse Bomb'],
    's010': ['レインボウシャワー', 'Prism Rain'],
    's011': ['フォトンチャージ', 'Photon Charge'],
    's012': ['アブソリュートゼロ', 'Absolute Zero'],
    's013': ['ライトニングレイ', 'Lightning Ray'],
    's014': ['ソニックシャドウ', 'Sonic Shadow'],
    's015': ['アルテマキャノン', 'Ultima Cannon'],
    's016': ['シャイニーブルーム', 'Lightbloom'],
    's017': ['マルチボーテックス', 'Multivortex'],
    //kristalle
    leucht: ['きらめく', 'Shimmering Crystal', 'Leuchtkristall'],
    zeit: ['時', 'Fleeting Crystal', 'Zeitkristall'],
    kraft: ['力', 'Pulsing Crystal', 'Kraftkristall'],
    energie: ['みなぎる', 'Wellspring Crystal', 'Energiekristall'],
    luna: ['うるおい', 'Soothing Crystal', 'Lunakristall'],
    freuden: ['満たされる', 'Hungry Crystal', 'Freudenkristall'],
    zyklus: ['めぐりくる', 'Abounding Crystal', 'Zykluskristall'],
    //abilities
    
    
}