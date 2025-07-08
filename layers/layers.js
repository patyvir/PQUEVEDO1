var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_comunas_utm_1 = new ol.format.GeoJSON();
var features_comunas_utm_1 = format_comunas_utm_1.readFeatures(json_comunas_utm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_utm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunas_utm_1.addFeatures(features_comunas_utm_1);
var lyr_comunas_utm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comunas_utm_1, 
                style: style_comunas_utm_1,
                popuplayertitle: 'comunas_utm',
                interactive: false,
                title: '<img src="styles/legend/comunas_utm_1.png" /> comunas_utm'
            });
var format_Indicadores_barrios_AMC_2 = new ol.format.GeoJSON();
var features_Indicadores_barrios_AMC_2 = format_Indicadores_barrios_AMC_2.readFeatures(json_Indicadores_barrios_AMC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indicadores_barrios_AMC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicadores_barrios_AMC_2.addFeatures(features_Indicadores_barrios_AMC_2);
var lyr_Indicadores_barrios_AMC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicadores_barrios_AMC_2, 
                style: style_Indicadores_barrios_AMC_2,
                popuplayertitle: 'Indicadores_barrios_AMC',
                interactive: true,
    title: 'Indicadores_barrios_AMC<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_0.png" /> 43674,97084150000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_1.png" /> 43848,65400520000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_2.png" /> 44084,96777060000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_3.png" /> 49032,71542270000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_4.png" /> 50362,52981520000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_5.png" /> 50699,02612950000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_6.png" /> 56982,91261160000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_7.png" /> 59297,55176030000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_8.png" /> 63111,79559800000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_9.png" /> 64400,21827260000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_10.png" /> 64458,29276110000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_11.png" /> 68768,59631850000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_12.png" /> 71973,08904170000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_13.png" /> 73441,00709710000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_14.png" /> 74146,38485160000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_15.png" /> 79066,42453890000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_16.png" /> 79866,06466649999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_17.png" /> 80401,07920630000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_18.png" /> 82775,66749800000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_19.png" /> 85142,82261570000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_20.png" /> 90916,40047100000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_21.png" /> 92539,63506700000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_22.png" /> 92615,67223909999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_23.png" /> 95281,91099400001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_24.png" /> 96389,19446440000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_25.png" /> 96854,89241080001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_26.png" /> 98777,69120940000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_27.png" /> 103354,65449900000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_28.png" /> 107355,05341900000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_29.png" /> 107392,54026199999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_30.png" /> 110254,42720200001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_31.png" /> 113147,36706800001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_32.png" /> 113295,33747899999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_33.png" /> 113785,49880400000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_34.png" /> 114204,97751400000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_35.png" /> 117866,04399300000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_36.png" /> 117978,17623200000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_37.png" /> 119074,35889300000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_38.png" /> 121826,76695200001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_39.png" /> 125904,12288700000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_40.png" /> 126706,31021800000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_41.png" /> 127342,67393300000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_42.png" /> 128142,06171100000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_43.png" /> 129870,76573699999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_44.png" /> 133712,09538099999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_45.png" /> 139058,11157300000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_46.png" /> 145963,17707800001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_47.png" /> 148041,81353499999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_48.png" /> 157444,94880400001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_49.png" /> 166804,35351900000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_50.png" /> 179653,22104999999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_51.png" /> 180493,09569900000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_52.png" /> 181794,22844400001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_53.png" /> 186492,90202199999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_54.png" /> 191594,69898099999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_55.png" /> 196733,98441800001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_56.png" /> 202059,65591599999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_57.png" /> 202188,83111200001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_58.png" /> 204984,05129100001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_59.png" /> 206792,26525299999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_60.png" /> 212838,54731699999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_61.png" /> 215806,74321799999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_62.png" /> 216361,72304700001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_63.png" /> 216674,04214800001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_64.png" /> 216846,31182800001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_65.png" /> 222631,49364900001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_66.png" /> 229170,62523199999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_67.png" /> 229262,87576699999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_68.png" /> 229717,14784399999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_69.png" /> 232518,25715100000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_70.png" /> 233882,55302900000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_71.png" /> 234026,07926900001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_72.png" /> 236783,62768899999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_73.png" /> 241535,65109100001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_74.png" /> 242583,17662200000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_75.png" /> 242672,18828700000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_76.png" /> 245190,14469600000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_77.png" /> 249641,25535900000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_78.png" /> 251894,97178399999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_79.png" /> 253664,99922000000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_80.png" /> 256602,96864800001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_81.png" /> 257144,25765600000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_82.png" /> 258520,63554500000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_83.png" /> 263714,43410700001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_84.png" /> 264637,62604900001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_85.png" /> 266033,79819599999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_86.png" /> 273063,20812299999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_87.png" /> 277129,31967400003<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_88.png" /> 280777,96222400002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_89.png" /> 281857,37507000001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_90.png" /> 287566,97642399999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_91.png" /> 289903,46330499998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_92.png" /> 294840,49442300003<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_93.png" /> 296274,48348800000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_94.png" /> 314314,09285100002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_95.png" /> 317919,10022099997<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_96.png" /> 318240,85044800001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_97.png" /> 318342,12939100002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_98.png" /> 323106,76702500001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_99.png" /> 325706,27488200000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_100.png" /> 327841,15689699998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_101.png" /> 333948,35571600002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_102.png" /> 340164,47333200002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_103.png" /> 343802,21090100001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_104.png" /> 348481,87976699998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_105.png" /> 358741,34389800002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_106.png" /> 376145,71881499997<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_107.png" /> 384487,35392299999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_108.png" /> 384553,86050499999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_109.png" /> 387111,17104900000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_110.png" /> 389146,61926000001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_111.png" /> 393104,76528599998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_112.png" /> 393325,51783400000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_113.png" /> 393922,28039000003<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_114.png" /> 404719,17808099999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_115.png" /> 406864,30212100002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_116.png" /> 410989,61254900001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_117.png" /> 413195,67470999999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_118.png" /> 415731,30016799999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_119.png" /> 426222,49426299997<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_120.png" /> 434378,32568100002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_121.png" /> 435414,55344900000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_122.png" /> 436479,87237900001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_123.png" /> 444015,20447200001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_124.png" /> 452210,50114900002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_125.png" /> 454033,32413700002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_126.png" /> 489665,49546000001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_127.png" /> 492977,42086900002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_128.png" /> 498995,43151999998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_129.png" /> 505201,19717599999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_130.png" /> 512186,22032399999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_131.png" /> 521715,46888499998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_132.png" /> 531436,56011900003<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_133.png" /> 535815,01341000001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_134.png" /> 550682,41996600002<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_135.png" /> 550705,35045499995<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_136.png" /> 589043,37678699999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_137.png" /> 594589,03235800005<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_138.png" /> 601234,33015699999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_139.png" /> 603103,91925799998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_140.png" /> 608938,91964800004<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_141.png" /> 618797,30248399999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_142.png" /> 622563,52750500001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_143.png" /> 629872,49629699998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_144.png" /> 632445,45844099997<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_145.png" /> 670221,30602599995<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_146.png" /> 685747,46329900005<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_147.png" /> 717983,50566699996<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_148.png" /> 724003,75976399996<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_149.png" /> 732618,08620999998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_150.png" /> 749479,44978200004<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_151.png" /> 764783,96204999997<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_152.png" /> 798503,61006400001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_153.png" /> 838037,75733699999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_154.png" /> 915972,71779999998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_155.png" /> 964827,53422599996<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_156.png" /> 1055756,95023000007<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_157.png" /> 1079546,47130999994<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_158.png" /> 1089330,02967000008<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_159.png" /> 1109903,64491000003<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_160.png" /> 1152211,50114999991<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_161.png" /> 1152618,87777999998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_162.png" /> 1242193,39366999990<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_163.png" /> 1279988,89720000001<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_164.png" /> 1327458,82575999992<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_165.png" /> 1328166,95041000005<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_166.png" /> 1345722,25508000003<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_167.png" /> 1410360,60152000003<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_168.png" /> 1441403,46620999998<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_169.png" /> 1449879,29615000007<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_170.png" /> 1479938,44375000009<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_171.png" /> 1607393,97998999991<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_172.png" /> 1655229,43278999999<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_173.png" /> 1896124,29759000009<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_174.png" /> 2159922,39563999977<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_175.png" /> 2384081,07280999981<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_176.png" /> 2560641,24508999987<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_177.png" /> 2801481,18873000005<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_178.png" /> 4000489,23969000019<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_179.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_comunas_utm_1.setVisible(false);lyr_Indicadores_barrios_AMC_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_comunas_utm_1,lyr_Indicadores_barrios_AMC_2];
lyr_comunas_utm_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Indicadores_barrios_AMC_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_comunas_utm_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_Indicadores_barrios_AMC_2.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_comunas_utm_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_Indicadores_barrios_AMC_2.set('fieldLabels', {'Id': 'no label', 'Nombre': 'inline label - always visible', 'Area': 'inline label - always visible', 'hab_m2': 'inline label - always visible', 'Sum_Poblac': 'inline label - always visible', 'av_hab': 'inline label - always visible', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_Indicadores_barrios_AMC_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});