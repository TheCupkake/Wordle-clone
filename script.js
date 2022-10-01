
startInteraction()


let targetWords = [
    {"name":"arnold","hint":"I was the PFA young player of the year in 2020","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Trent_Alexander-Arnold_2018.jpg/220px-Trent_Alexander-Arnold_2018.jpg"},
    {"name":"mbeumo","hint":"I have played over 100 games for Brentford","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bryan_Mbeumo%2C_Brentford_F.C._footballer%2C_July_2021.jpg/150px-Bryan_Mbeumo%2C_Brentford_F.C._footballer%2C_July_2021.jpg"},
    {"name":"bailey","hint":"I am Jamaican and was included in the bundesliga team of the season in 2018","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Leon_Bailey_bei_der_Saisoneroeffnung_August_2018.jpg/220px-Leon_Bailey_bei_der_Saisoneroeffnung_August_2018.jpg"},
    {"name":"areola","hint":"I have signed for Real Madrid on loan from PSG in 2019","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93011_%28cropped%29.jpg/220px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93011_%28cropped%29.jpg"},
    {"name":"moreno","hint":"I reached the Europa League final with 3 different teams, winning it twice","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Alberto_Moreno_2017.jpg/175px-Alberto_Moreno_2017.jpg"},
    {"name":"aurier","hint":"I have won the AFCON in 2015","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3707_by_Stepro_%28cropped%29.jpg/220px-2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3707_by_Stepro_%28cropped%29.jpg"},
    {"name":"miazga","hint":"I am an American international center back","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/USAvVEN_2019-06-09_-_Matt_Miazga_%2851171093429%29_%28cropped%29.jpg/220px-USAvVEN_2019-06-09_-_Matt_Miazga_%2851171093429%29_%28cropped%29.jpg"},
    {"name":"foster","hint":"I have a beloved youtube channel","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ben_Foster_Manchester_United_v_West_Bromwich_Albion_2017.jpg/220px-Ben_Foster_Manchester_United_v_West_Bromwich_Albion_2017.jpg"},
    {"name":"torres","hint":"I have won the World Cup and the Euros but never won a league title","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Fernando_Torres_2017.jpg/220px-Fernando_Torres_2017.jpg"},{"name":"diallo","hint":"I was a runner up in the europa league 2021","image":"https://media.gettyimages.com/photos/amad-diallo-of-manchester-united-celebrates-scoring-his-teams-first-picture-id1306543187?s=2048x2048"},{"name":"niguez","hint":"I won La Liga but never won the Champions League","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sa%C3%BAl_%C3%91%C3%ADguez_2021.jpg/220px-Sa%C3%BAl_%C3%91%C3%ADguez_2021.jpg"},{"name":"giroud","hint":"I won the Puskas award in 2017","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Olivier_Giroud_2018.jpg/220px-Olivier_Giroud_2018.jpg"},{"name":"romero","hint":"I won the Europa League and was a runner up in the World Cup and Copa America","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Sergio_Romero_%28ManUtd%29.jpg/175px-Sergio_Romero_%28ManUtd%29.jpg"},{"name":"walker","hint":"I was in the PFA Team of the Year 3 times","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kyle_Walker.jpg/220px-Kyle_Walker.jpg"},{"name":"dennis","hint":"I signed for Watford from the Belgian league in 2021","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/FC_Salzburg_vs._Club_Br%C3%BCgge_%28Euroleague_Sechzehntelfinale%29_14_%28cropped%29.jpg/220px-FC_Salzburg_vs._Club_Br%C3%BCgge_%28Euroleague_Sechzehntelfinale%29_14_%28cropped%29.jpg"},{"name":"justin","hint":"I am a current Premier League defender","image":"https://s.hs-data.com/bilder/spieler/gross/340693.jpg?fallback=png"},{"name":"mahrez","hint":"I won the Premier League a total of 3 times with 2 different teams","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Alg%C3%A9rie_-_Arm%C3%A9nie_-_20140531_-_Riyad_Mahrez.jpg/220px-Alg%C3%A9rie_-_Arm%C3%A9nie_-_20140531_-_Riyad_Mahrez.jpg"},{"name":"suarez","hint":"I have scored over 400 career goals","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Luis_Su%C3%A1rez_Atl%C3%A9tico_Madrid.jpg/220px-Luis_Su%C3%A1rez_Atl%C3%A9tico_Madrid.jpg"},{"name":"saliba","hint":"I have been on loan from Arsenal to 3 different teams","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lens_-_Marseille_%2822-01-2022%29_15.jpg/220px-Lens_-_Marseille_%2822-01-2022%29_15.jpg"},{"name":"ayling","hint":"I have won the championship in 2020","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Luke_Ayling_with_fan_Nathan_Reynolds_%28July_2020%29_%28cropped%29.jpg/220px-Luke_Ayling_with_fan_Nathan_Reynolds_%28July_2020%29_%28cropped%29.jpg"},{"name":"lukaku","hint":"I play with my brother for the same national team","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Romelu_Lukaku_2021.jpg/220px-Romelu_Lukaku_2021.jpg"},{"name":"prowse","hint":"I have the Premier League's best free-kick conversion rate since 2013","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/James_Ward-Prowse_v_Augsburg_2017.jpg/220px-James_Ward-Prowse_v_Augsburg_2017.jpg"},{"name":"masina","hint":"I am an african player and an FA Cup runner up in 2019","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Adam_Masina_%28cropped%29.jpg/220px-Adam_Masina_%28cropped%29.jpg"},{"name":"coufal","hint":"I won the Czech cup in 2019","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Vladim%C3%ADr_Coufal_with_West_Ham_United.jpeg/220px-Vladim%C3%ADr_Coufal_with_West_Ham_United.jpeg"},{"name":"rooney","hint":"I won the Premier League 5 times","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Zarya-MU_%286%29.jpg/220px-Zarya-MU_%286%29.jpg"},{"name":"camara","hint":"I have scored 29 goals for Senegal","image":"https://img.a.transfermarkt.technology/portrait/big/3900-1414138005.jpg?lm=1"},{"name":"traore","hint":"I have been described as lightning quick but perhaps lacking composure or an end product","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Adama_Traore_Wolves_vs_Man_U_2020-01-04_%28cropped%29.jpg/220px-Adama_Traore_Wolves_vs_Man_U_2020-01-04_%28cropped%29.jpg"},{"name":"thomas","hint":"I am a former Premier League winger","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jerome_Thomas.jpg/220px-Jerome_Thomas.jpg"},{"name":"austin","hint":"I was QPR's top goalscorer in the premier league in 2015","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Southampton_FC_versus_FC_Augsburg_%2836228030141%29.jpg/220px-Southampton_FC_versus_FC_Augsburg_%2836228030141%29.jpg"},{"name":"krafth","hint":"I have played 38 games for Sweden","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Emil_Krafth_%28cropped%29.jpg/220px-Emil_Krafth_%28cropped%29.jpg"},{"name":"martyn","hint":"I was signed by Leeds United at 1996 alongside Lee Bower","image":"https://i2-prod.leeds-live.co.uk/sport/leeds-united/article18046455.ece/ALTERNATES/s810/0_Nigel-Martyn.jpg"},{"name":"banega","hint":"I won the Europa League 4 times","image":"https://upload.wikimedia.org/wikipedia/commons/9/9f/FRA-ARG_%281%29_%28cropped%29.jpg"},{"name":"kenedy","hint":"I share my name with a famous United States president","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Kenedy_2017.jpg/220px-Kenedy_2017.jpg"},{"name":"soares","hint":"I have won the EUROs and spent 5 years at Southampton","image":"https://upload.wikimedia.org/wikipedia/commons/8/85/C%C3%A9dric_%28cropped%29_2.jpg"},{"name":"aguero","hint":"I have won the golden boy award in 2007","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ag%C3%BCero_in_2018.jpg/220px-Ag%C3%BCero_in_2018.jpg"},{"name":"semedo","hint":"I won La Liga nd the Uefa Nations League","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mex-por-14_%28cropped%29.jpg/220px-Mex-por-14_%28cropped%29.jpg"},{"name":"taylor","hint":"I reached the Euro semifinal with Wales","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/AUT_vs._WAL_2016-10-06_%28116%29.jpg/220px-AUT_vs._WAL_2016-10-06_%28116%29.jpg"},{"name":"savage","hint":"I am currently a well known controversial pundit","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RobbieSavage01.JPG/220px-RobbieSavage01.JPG"},{"name":"iborra","hint":"Leicester City signed me in 2017","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vicent_Iborra.jpg/150px-Vicent_Iborra.jpg"},{"name":"dallas","hint":"My name is the same as a city in north Texas","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/DallasPreSeason18.jpg/220px-DallasPreSeason18.jpg"},{"name":"gibson","hint":"I am an English defender, I started my career with Middlesbrough","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Ben_Gibson_2021-08-07_1.jpg/220px-Ben_Gibson_2021-08-07_1.jpg"},{"name":"ramsey","hint":"I have won the FA Cup 3 times","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Aaron_Ramsey_2019.jpg/220px-Aaron_Ramsey_2019.jpg"},{"name":"cahill","hint":"I am Australia's oldest ever goalscorer","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tim_Cahill.jpg/220px-Tim_Cahill.jpg"},{"name":"aarons","hint":"I have played over 100 games for Norwich City","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Max_Aarons_2021-08-07_1.jpg/220px-Max_Aarons_2021-08-07_1.jpg"},{"name":"lamela","hint":"I was Spurs' most expensive ever signing when they signed me in 2013","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3690_by_Stepro_%28cropped%29.jpg/220px-2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3690_by_Stepro_%28cropped%29.jpg"},{"name":"milner","hint":"I was the PFA young player of the year in 2010","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Liverpool_FC_gegen_1._FSV_Mainz_05_%28Testspiel_23._Juli_2021%29_24.jpg/220px-Liverpool_FC_gegen_1._FSV_Mainz_05_%28Testspiel_23._Juli_2021%29_24.jpg"},{"name":"parejo","hint":"I played for Valencia for 9 years","image":"https://upload.wikimedia.org/wikipedia/commons/5/56/Real_Valladolid-Valencia_CF%2C_2019-05-18_%2819%29_%28cropped%29.jpg"},{"name":"wilson","hint":"I have been on loan from Liverpool to 5 different teams","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Harry_Wilson_2020.jpg/220px-Harry_Wilson_2020.jpg"},{"name":"sancho","hint":"I have played for both Manchester City and United","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jadon_Sancho_2020.jpg/220px-Jadon_Sancho_2020.jpg"},{"name":"hughes","hint":"I famously have white hair","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Will_Hughes.jpg/220px-Will_Hughes.jpg"},{"name":"carson","hint":"I have played for both Man City and Liverpool","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Carson%2C_Scott.jpg/220px-Carson%2C_Scott.jpg"},{"name":"fofana","hint":"A Premier League game was paused for me to break my fast in Ramadan","image":"https://i2-prod.leicestermercury.co.uk/sport/football/football-news/article5325081.ece/ALTERNATES/s810/1_Wesley-Fofana.jpg"},{"name":"joselu","hint":"I am a Spanish striker who played for Newcastle and Real Madrid","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Jos%C3%A9_Luis_Sanmart%C3%ADn_Mato%2C_Celta_de_Vigo_2009.jpg/200px-Jos%C3%A9_Luis_Sanmart%C3%ADn_Mato%2C_Celta_de_Vigo_2009.jpg"},{"name":"zidane","hint":"I scored in a Champions League final","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg/220px-Zinedine_Zidane_by_Tasnim_03.jpg"},{"name":"grujic","hint":"I was Klopp's second signing at Liverpool","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Hertha_BSC_vs._West_Ham_United_20190731_%28064%29.jpg/220px-Hertha_BSC_vs._West_Ham_United_20190731_%28064%29.jpg"},{"name":"davies","hint":"I was in the champions league squad of the season before I was 21","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Alphonso_Davies_20190428_%28cropped%29.jpg/220px-Alphonso_Davies_20190428_%28cropped%29.jpg"},{"name":"bailly","hint":"I was Mourinho's first signing at Manchester United","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Eric_Bailly_%28cropped%29.jpg/220px-Eric_Bailly_%28cropped%29.jpg"},{"name":"drogba","hint":"Jose Mourinho signed me 2 times in his career","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Didier_Drogba_%282019%29_%28cropped%29.jpg/220px-Didier_Drogba_%282019%29_%28cropped%29.jpg"},{"name":"partey","hint":"I was in the CAF player of the year in 2018","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/ATL-Madrid-Lokomotiv001-Thomas_%28cropped%29.jpg/220px-ATL-Madrid-Lokomotiv001-Thomas_%28cropped%29.jpg"},{"name":"lowton","hint":"I am a premier league right back","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Matt_Lowton.jpg/220px-Matt_Lowton.jpg"},{"name":"aduriz","hint":"I scored over a 100 La liga goals but never played for Barcelona or Madrid","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/SM-AB_2018_%287%29_%28Aduriz%29.jpg/220px-SM-AB_2018_%287%29_%28Aduriz%29.jpg"},{"name":"baines","hint":"I was Everton's captain and twice their player of the season","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baines_Leighton_126176_%28cropped%29.jpg/200px-Baines_Leighton_126176_%28cropped%29.jpg"},{"name":"santon","hint":"I won the Serie A twice and the Champions league once","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Davide_Santon_-_Inter_Mailand_%282%29.jpg/250px-Davide_Santon_-_Inter_Mailand_%282%29.jpg"},{"name":"konate","hint":"I was the DFB-Pokal runner up in 2019 and 2021","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Liverpool_FC_gegen_1._FSV_Mainz_05_%28Testspiel_23._Juli_2021%29_15_%28cropped%29.jpg/220px-Liverpool_FC_gegen_1._FSV_Mainz_05_%28Testspiel_23._Juli_2021%29_15_%28cropped%29.jpg"},{"name":"stones","hint":"I was the second most expensive defender in history when I was signed on 2016","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/1_john_stones_2015_%28cropped%29.jpg/220px-1_john_stones_2015_%28cropped%29.jpg"},{"name":"darlow","hint":"I am a goalkeeper who have played for Newcastle United","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Karl_Darlow_2014.jpg/250px-Karl_Darlow_2014.jpg"},{"name":"lemina","hint":"I have won the Serie A and Coppa Italia twice","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/FC_Lorient_-_january_3rd_2013_training_-_Mario_Lemina.JPG/220px-FC_Lorient_-_january_3rd_2013_training_-_Mario_Lemina.JPG"},{"name":"alonso","hint":"I have played under Jose Mourinho, Guardiola, Benitez and Ancelotti","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Los_Caminos_del_f%C3%BAtbol._Xabi_Alonso_%2839666777934%29_%28cropped%29.jpg/220px-Los_Caminos_del_f%C3%BAtbol._Xabi_Alonso_%2839666777934%29_%28cropped%29.jpg"},{"name":"buffon","hint":"I won the Serie A, Coppa Italia and Ligue 1","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Gianluigi_Buffon_%2831784615942%29_%28cropped%29.jpg/220px-Gianluigi_Buffon_%2831784615942%29_%28cropped%29.jpg"},{"name":"elanga","hint":"I was asked to hold my head up high by Marcus Rashford","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Anthony_Elanga.jpg/220px-Anthony_Elanga.jpg"},{"name":"heaton","hint":"I have played two times for Manchester United","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tom_Heaton_playing_for_Burnley_%28cropped%29.jpg/220px-Tom_Heaton_playing_for_Burnley_%28cropped%29.jpg"},{"name":"fraser","hint":"I have scored against Liverpool as we beat them 4-3 in 2016","image":"https://upload.wikimedia.org/wikipedia/commons/5/5b/Ryan_Fraser_%28cropped%29.jpg"},{"name":"murphy","hint":"I scored at Old Trafford for 3 consecutive years","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Danny_Murphy2011.jpg/220px-Danny_Murphy2011.jpg"},{"name":"stegen","hint":"I was in the UEFA Team of the Year in 2018","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Real_Valladolid_-_FC_Barcelona%2C_2018-08-25_%2879%29_%28cropped%29.jpg/220px-Real_Valladolid_-_FC_Barcelona%2C_2018-08-25_%2879%29_%28cropped%29.jpg"},{"name":"pandev","hint":"I won the Serie A, Champions League and Fifa Club World Cup","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Goran_Pandev.JPG/220px-Goran_Pandev.JPG"},{"name":"barnes","hint":"I got promoted to the premier league twice in my career","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ashley_Barnes_Brighton_vs_Spurs.jpg/220px-Ashley_Barnes_Brighton_vs_Spurs.jpg"},{"name":"wesley","hint":"I am a brazilian Premier League player","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/FC_Salzburg_vs._Club_Br%C3%BCgge_%28Euroleague_Sechzehntelfinale%29_12_%28cropped%29.jpg/220px-FC_Salzburg_vs._Club_Br%C3%BCgge_%28Euroleague_Sechzehntelfinale%29_12_%28cropped%29.jpg"},{"name":"cuenca","hint":"I am a winger who started my career at Barcelona","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%E8%B9%B4%E7%90%83%E9%81%B8%E6%89%8B1_-_Isaac_Cuenca.jpg/220px-%E8%B9%B4%E7%90%83%E9%81%B8%E6%89%8B1_-_Isaac_Cuenca.jpg"},{"name":"varane","hint":"I have won the league, champions league and the world cup","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Rapha%C3%ABl_Varane_2018_%28cropped%29.jpg/220px-Rapha%C3%ABl_Varane_2018_%28cropped%29.jpg"},{"name":"rondon","hint":"I have played 84 games for Venezuela","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Salom%C3%B3n_Rond%C3%B3n_2021.jpg/220px-Salom%C3%B3n_Rond%C3%B3n_2021.jpg"},{"name":"mejbri","hint":"My first name is a famous TV show","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Hannibal_Mejbri%2C_28_July_2021_%28cropped%29.jpg/220px-Hannibal_Mejbri%2C_28_July_2021_%28cropped%29.jpg"},{"name":"cooper","hint":"I share my last name with a famous american actor","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/LiamCooper.jpg/220px-LiamCooper.jpg"},{"name":"umtiti","hint":"I have played over 30 games for France scoring 4 goals","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Samuel_Umtiti_2018.jpg/220px-Samuel_Umtiti_2018.jpg"},{"name":"karius","hint":"I made the most clean sheets in the 2017/18 Champions League","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Loris_Karius.jpg/220px-Loris_Karius.jpg"},{"name":"werner","hint":"I am Stuttgart's youngest ever goalscorer","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Timo_Werner_850_0621.jpg/220px-20180602_FIFA_Friendly_Match_Austria_vs._Germany_Timo_Werner_850_0621.jpg"},{"name":"cavani","hint":"I have won the Copa Ameica in 2011","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Edinson_Cavani_2018.jpg/220px-Edinson_Cavani_2018.jpg"},{"name":"nolito","hint":"I played for Barcelona, Man City and Sevilla","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nolito.JPG/220px-Nolito.JPG"},{"name":"guaita","hint":"I am a current Premier League goalkeeper","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Vicente_Guaita.jpg/220px-Vicente_Guaita.jpg"},{"name":"garcia","hint":"I drink sangria","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Luis_Garcia.jpg/250px-Luis_Garcia.jpg"},{"name":"dejong","hint":"I am one of Barcelona's most ever expensive signings","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_34.jpg/220px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_34.jpg"},{"name":"adrian","hint":"I am a spanish player who have won the Premier League and Chamoions League","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Adri%C3%A1n_of_West_Ham_United_July_2015.jpg/220px-Adri%C3%A1n_of_West_Ham_United_July_2015.jpg"},{"name":"hayden","hint":"I have played over 150 league games for Newcastle United","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Isaac_Hayden_2021-08-07_1.jpg/220px-Isaac_Hayden_2021-08-07_1.jpg"},{"name":"bonera","hint":"I played over 150 games for Milan and won the Champions League","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Daniele_Bonera_%E2%80%93_A.C._Milan.jpg/220px-Daniele_Bonera_%E2%80%93_A.C._Milan.jpg"},{"name":"modric","hint":"I have played over 250 league games for Real Madrid","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Luka_Modric_Interview_2021_%28cropped%29.jpg/220px-Luka_Modric_Interview_2021_%28cropped%29.jpg"},{"name":"baresi","hint":"I haven't played for a club other than AC Milan","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Franco_Baresi_2012.jpg/220px-Franco_Baresi_2012.jpg"},{"name":"mcneil","hint":"I am a current premier league winger","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Dwight_McNeil_controls_the_ball.jpg/220px-Dwight_McNeil_controls_the_ball.jpg"},{"name":"asenjo","hint":"I am a current La Liga goalkeeper","image":"https://www.playmakerstats.com/img/jogadores/06/679406_ori__20200620003908_sergio_asenjo.jpg"},{"name":"marcal","hint":"I play for Wolves","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Fernando_Mar%C3%A7al_2019.jpg/220px-Fernando_Mar%C3%A7al_2019.jpg"},{"name":"hoever","hint":"I am the youngest ever player to represent Liverpool in the FA Cup","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ki-Jana_Hoever_LFCU19_2019.jpg/220px-Ki-Jana_Hoever_LFCU19_2019.jpg"},{"name":"davids","hint":"I started my career at Ajax and finished it as Barnet","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Edgar_Davids_2.jpg/250px-Edgar_Davids_2.jpg"},{"name":"elneny","hint":"I was the AFCON runner up on 2 seperate occasions","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Mohamed_Elneny_2018.jpg/220px-Mohamed_Elneny_2018.jpg"},{"name":"thiago","hint":"I have played under Guardiola and Klopp","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Thiago_Alcantara_13_%28cropped%29.jpg/220px-UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Thiago_Alcantara_13_%28cropped%29.jpg"},{"name":"murray","hint":"I held the record for most goals scored in a Championship season until 2021","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Glenn_Murray_Brighton.jpg/220px-Glenn_Murray_Brighton.jpg"},{"name":"lennon","hint":"I have played almost 400 premier league games","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Aaron_Lennon_Brighton_v_Spurs_Amex_Opening_30711.jpg/220px-Aaron_Lennon_Brighton_v_Spurs_Amex_Opening_30711.jpg"},{"name":"maupay","hint":"I scored 28 goals for Brentford in 2018/19","image":"https://i2-prod.leeds-live.co.uk/sport/leeds-united/article18046455.ece/ALTERNATES/s810/0_Nigel-Martyn.jpg"},{"name":"lloris","hint":"I am the current captain of my team and my country","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3687_by_Stepro.jpg/220px-2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3687_by_Stepro.jpg"},{"name":"dawson","hint":"I was Spurs' player of the year in 2010","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Michael_Dawson_2016-05-28_1.jpg/200px-Michael_Dawson_2016-05-28_1.jpg"},{"name":"ziyech","hint":"Ajax fans nickname me The Wizard","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hakim_Ziyech_2021.jpg/220px-Hakim_Ziyech_2021.jpg"},{"name":"tomori","hint":"I have played for Chelsea and AC Milan","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tomori_vs_Liverpool_2019_%28cropped%29.jpg/220px-Tomori_vs_Liverpool_2019_%28cropped%29.jpg"},{"name":"morgan","hint":"I am a Premier League winning defender","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Wes_Morgan_Warming_up_vs_Leamington_Spa.jpg/220px-Wes_Morgan_Warming_up_vs_Leamington_Spa.jpg"},{"name":"telles","hint":"I have a double L in my name","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Alex_Telles_2021.jpg/220px-Alex_Telles_2021.jpg"},{"name":"hazard","hint":"I scored in a Europa League final","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg/220px-Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg"},{"name":"cornet","hint":"I scored 51 goals for Lyon","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/France_-_England_U19%2C_20150331_15.jpg/220px-France_-_England_U19%2C_20150331_15.jpg"},{"name":"albiol","hint":"I played 119 games for Real Madrid","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_136_%28cropped%29.jpg/220px-UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_136_%28cropped%29.jpg"},{"name":"vlasic","hint":"I have played over 30 games for Croatia","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Nikola_Vla%C5%A1i%C4%87_%28CSKA_Moscow%2C_19.08.2019%29.jpg/220px-Nikola_Vla%C5%A1i%C4%87_%28CSKA_Moscow%2C_19.08.2019%29.jpg"},{"name":"deeney","hint":"I have 3 Es in my name","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Troy_Deeney_141028.jpg/220px-Troy_Deeney_141028.jpg"}
]


const dictionary = [
  "devrij",
  "deligt",
  "cardoz",
  "nissen",
  "okafor",
  "tijani",
  "guindo",
  "smicer",
  "kewell",
  "hamann",
  "coates",
  "inacio",
  "esgaio",
  "feddal",
  "tabata",
  "santos",
  "pjanic",
  "ashley",
  "ramsey",
  "aarons",
  "adrian",
  "aguero",
  "telles",
  "arnold",
  "alonso",
  "alzate",
  "ampadu",
  "andone",
  "archer",
  "areola",
  "aurier",
  "ayling",
  "austin",
  "bailey",
  "bailly",
  "barnes",
  "baxter",
  "benson",
  "braore",
  "bishop",
  "bogusz",
  "bolton",
  "bowden",
  "bridge",
  "bordao",
  "cahill",
  "carson",
  "cavani",
  "soares",
  "chauke",
  "cirkin",
  "baines",
  "conteh",
  "cooper",
  "cornet",
  "coufal",
  "cundle",
  "dallas",
  "darlow",
  "dawson",
  "davies",
  "deeney",
  "dennis",
  "diallo",
  "peters",
  "bonner",
  "dobbin",
  "elanga",
  "engels",
  "fofana",
  "foster",
  "fraser",
  "garcia",
  "garner",
  "gibson",
  "giroud",
  "gordon",
  "grujic",
  "guaita",
  "hanley",
  "hayden",
  "heaton",
  "hoever",
  "hughes",
  "jensen",
  "mcneil",
  "jansen",
  "justin",
  "kamara",
  "camara",
  "drogba",
  "karius",
  "kenedy",
  "kilman",
  "konate",
  "krafth",
  "lamela",
  "lazaar",
  "lemina",
  "lennon",
  "levitt",
  "lloris",
  "lowton",
  "lukaku",
  "mahrez",
  "marcal",
  "martin",
  "martyn",
  "masina",
  "mateta",
  "maupay",
  "mbeumo",
  "mcatee",
  "mclean",
  "mejbri",
  "miazga",
  "milner",
  "elneny",
  "moreno",
  "morgan",
  "morris",
  "morton",
  "mundle",
  "murphy",
  "murray",
  "nartey",
  "nelson",
  "semedo",
  "ngakia",
  "niguez",
  "norris",
  "offiah",
  "onyeka",
  "oxlade",
  "partey",
  "harris",
  "farrel",
  "ramsay",
  "romero",
  "rondon",
  "rogers",
  "saivet",
  "saliba",
  "sancho",
  "sanson",
  "santon",
  "sarkic",
  "savage",
  "simons",
  "steele",
  "stones",
  "taylor",
  "thiago",
  "thomas",
  "tomori",
  "torres",
  "valery",
  "varane",
  "modric",
  "vlasic",
  "walker",
  "walton",
  "prowse",
  "werner",
  "wesley",
  "wilson",
  "wilmot",
  "zeqiri",
  "ziyech",
  "suarez",
  "stegen",
  "hazard",
  "umtiti",
  "traore",
  "albiol",
  "asenjo",
  "borges",
  "banega",
  "aduriz",
  "bonera",
  "cuenca",
  "nolito",
  "dejong",
  "vaclik",
  "duarte",
  "puerto",
  "juanma",
  "joselu",
  "corona",
  "ghilas",
  "iborra",
  "parejo",
  "buffon",
  "pandev",
  "baresi",
  "rooney",
  "zidane",
  "armano",
  "davids",
  "acerbi",
  "abukar",
  "sandro",
  "amione",
  "armini",
  "aresti",
  "arthur",
  "audero",
  "badelj",
  "balogh",
  "abidal",
  "vieira",
  "lauren",
  "araujo",
  "barrow",
  "benali",
  "branco",
  "bianco",
  "valero",
  "bremer",
  "carlos",
  "caputo",
  "chiesa",
  "hakimi",
  "mbappe",
  "icardi",
  "neymar",
  "bernat",
  "kehrer",
  "mendes",
  "ebimbe",
  "simons",
  "gharbi",
  "pavard",
  "gnabry",
  "moting",
  "wanner",
  "muller",
  "dahoud",
  "schulz",
  "akanji",
  "brandt",
  "witsel",
  "heskey",
  "howard",
  "seaman",
  "hyypia",
  "powell",
  "becker",
  "moraes",
  "essien",
  "zenden"

 
]


// create storage to store results
storage = window.localStorage


//global variables
const FLIP_ANIMATION_DURATION = 500
const DANCE_ANIMATION_DURATION = 500
const keyboard = document.querySelector("[data-keyboard]")
const WORD_LENGTH = 6
const alertContainer = document.querySelector("[data-alert-container]")
const guessGrid = document.querySelector("[data-guess-grid]")
const offsetFromDate = new Date(2022, 9, 30)
let tomorrow = new Date();
tomorrow.setHours(24, 0,0,0,0);
const msOffset = Date.now() - offsetFromDate
const dayOffset = msOffset / 1000 / 60 / 60 / 24
const player = targetWords[Math.floor(dayOffset)]
const targetWord = player.name
let recordedGuess = ""
let states = ""


//check if the user played before and whether he won or lost
function check() {
    if(localStorage.getItem('player') != targetWord){
        localStorage.clear()
    }
    
    else {
        if(localStorage.getItem('wonToday') === 'yes') {
            var finishModal = document.getElementById("finish")
            finishModal.classList.add("fade-in")
            finishModal.style.display = "block";
            populatePage()
            stopInteraction()
            
        }
        else if(localStorage.getItem('lostToday') === 'yes') {
            showAlert(targetWord.toUpperCase(), null)
            populatePage()
            stopInteraction()
            
            
        }
    
    }
    

}

check()


// populate the grid with the previous guesses of the user
function populatePage() {
    const prevGuesses = localStorage.getItem('guesses')
    const prevStates = localStorage.getItem('states')
    const prevTweet = localStorage.getItem('tweet')
    const prevTiles = document.querySelectorAll(".tile")
    document.getElementById("tweet").href = prevTweet
    for (let i = 0; i < prevGuesses.length; i++){
        prevTiles[i].textContent = prevGuesses[i]
        if (prevStates[i] === "c"){
            prevTiles[i].dataset.state = "correct"
        }
        
        else if (prevStates[i] === "l"){
            prevTiles[i].dataset.state = "wrong-location"
        }

        else{
            prevTiles[i].dataset.state = "wrong"
        }
    }

}


// store today's player on local storage
localStorage.setItem('player', targetWord)



const hint = player.hint
const image = player.image
// the placeholder word to be used in the program algorithm
let checkWordle
let tweet = "http://www.twitter.com/share?text="


const tweetElement = document.getElementById("tweet")
tweet += "%23WhoAmI++"
tweet += "%2D++"
tweet += Math.floor(dayOffset)
tweet += "%0D%0A"


// calculate coundtdown till next word
const myFunc = setInterval(function(){
    let timeLeft = tomorrow - Date.now();
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    if (hours <10){
        document.getElementById("hours").innerHTML = "0" + hours
    }
    else{
        document.getElementById("hours").innerHTML = hours
    }
    
    if (minutes <10){
        document.getElementById("minutes").innerHTML = "0" + minutes
    }
    else{
        document.getElementById("minutes").innerHTML = minutes
    }
    
    if (seconds <10){
        document.getElementById("seconds").innerHTML = "0" + seconds
    }
    else{
        document.getElementById("seconds").innerHTML = seconds
    }
}, 1000)

document.getElementsByClassName("image")[1].src = image
document.getElementsByClassName("image")[1].alt = targetWord
const playerName = document.querySelectorAll(".player-letter")
const finishModal = document.getElementById("finish")
const howToModal = document.getElementById("howTo")
const howToBtn = document.getElementById("howToBtn")
const infoModal = document.getElementById("info")
const infoBtn = document.getElementById("infoBtn")
const spanThree = document.getElementsByClassName("close")[0]
const spanTwo = document.getElementsByClassName("close")[2]
const span = document.getElementsByClassName("close")[1]
const hintContainer = document.getElementsByClassName("hint")[0]
const hintBack = document.getElementsByClassName("hint-back")[0]
const hintInner = document.getElementsByClassName("hint-inner")[0]
const tributes = document.querySelectorAll('div.tile.tribute')
let usedRows = 0


const playerHint = document.createElement("h3")
playerHint.textContent = hint
hintBack.appendChild(playerHint)


for (i = 0; i < targetWord.length; i++){
    playerName[i].textContent = targetWord[i]
}

hintContainer.addEventListener("click", flipHint)

function flipHint() {
        hintInner.classList.add("rotate")
        hintBack.classList.remove("rotate")
        sendTiles(tributes)
        setTimeout(() => {
            tributes.forEach((tribute, index) => {
                tribute.remove()
            })
        }, 3500)

}

function sendTiles(tiles){
    tweet += "%0D%0AViewed+Hint+👓"
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add("away")
            tile.addEventListener("animationend", () => {
            tile.style.visibility = "hidden";


        }, {once: true})


        }, index * DANCE_ANIMATION_DURATION / 5)
       

        
    })
    
}



howToBtn.onclick = function() {
  howToModal.classList.add("fade-in")
  howToModal.style.display = "block";
}



infoBtn.onclick = function() {
    infoModal.classList.add("fade-in")
    infoModal.style.display = "block";
  }

spanTwo.onclick = function() {
    infoModal.classList.remove("fade-in")
    infoModal.classList.add("fade-out")
    setTimeout(() => {
        infoModal.style.display = "none"
        infoModal.classList.remove("fade-out")
    }, 250)
}
spanThree.onclick = function() {
    finishModal.classList.remove("fade-in")
    finishModal.classList.add("fade-out")
    setTimeout(() => {
        finishModal.style.display = "none"
        finishModal.classList.remove("fade-out")
    }, 250)
}
  
span.onclick = function() {
  howToModal.classList.remove("fade-in")
  howToModal.classList.add("fade-out")
  setTimeout(() => {
        howToModal.style.display = "none"
        howToModal.classList.remove("fade-out")
    }, 250)
}

window.onclick = function(event) {
  if (event.target == howToModal || event.target == infoModal || event.target == finishModal) {
    howToModal.classList.remove("fade-in")
    howToModal.classList.add("fade-out")
    setTimeout(() => {
            howToModal.style.display = "none"
            howToModal.classList.remove("fade-out")
    }, 250)
    infoModal.classList.remove("fade-in")
    infoModal.classList.add("fade-out")
    setTimeout(() => {
        infoModal.style.display = "none"
        infoModal.classList.remove("fade-out")
    }, 250)
    finishModal.classList.remove("fade-in")
    finishModal.classList.add("fade-out")
    setTimeout(() => {
        finishModal.style.display = "none"
        finishModal.classList.remove("fade-out")
    }, 250)
  }
}


  function startInteraction() {
      document.addEventListener("click", handleMouseClick)
      document.addEventListener("keydown", handleKeyPress)
  }

  function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
  }

  function handleMouseClick(e) {
      console.log(e)
      if (e.target.matches("[data-key]")) {
          pressKey(e.target.dataset.key)
          return
      }

      if(e.target.matches("[data-enter]")) {
          submitGuess()
          return
      }
      if(e.target.matches("[data-delete]")){
          deleteKey()
          return
      }


  }

  function handleKeyPress(e) {
      if (e.key === "Enter") {
          submitGuess()
          return
      }

      if (e.key === "Backspace" || e.key === "Delete") {
          deleteKey()
          return
      }

      if (e.key.match(/^[a-z]$/)){
          pressKey(e.key)
          return

      }

  }

function pressKey(key){
    const activeTiles = getActiveTiles()
    if (activeTiles.length >= WORD_LENGTH) return
    const nextTile =guessGrid.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.textContent = key
    nextTile.classList.add("press")
    nextTile.dataset.state = "active"
}

function deleteKey(){
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length-1]
    if (lastTile == null) return
    lastTile.textContent = ""
    lastTile.classList.remove("press")
    delete lastTile.dataset.state
    delete lastTile.dataset.letter
}

function submitGuess(){
    
    const activeTiles = [...getActiveTiles()]
    if (activeTiles.length !== WORD_LENGTH) {
        showAlert("Not long enough")
        shakeTiles(activeTiles)
        return
    }

    const guess = activeTiles.reduce((word, tile) => {
        return word + tile.dataset.letter
    }, "")
    

    if (!dictionary.includes(guess)) {
        showAlert("Not a player")
        shakeTiles(activeTiles)
        return
    }


    recordedGuess += guess
    stopInteraction()
    activeTiles.forEach((...params) => flipTiles(...params, guess))
    usedRows +=1 
    tweet += "%0D%0A"
    if (usedRows >= 5) {
        hintContainer.removeEventListener("click", flipHint)
        document.getElementsByClassName("hint-front ")[0].style.backgroundColor = "grey"
        document.getElementsByClassName("hint-front ")[0].style.color = "lightgrey"
        document.getElementsByClassName("hint-front ")[0].style.cursor = "default"
    }

}

function flipTiles(tile, index, array, guess) {
    //disable hint when tiles are being flipped
    hintContainer.removeEventListener("click", flipHint)


    const letter = tile.dataset.letter
    const key = keyboard.querySelector(`[data-key="${letter}"i]`)
    checkWordle = targetWord
    setTimeout(() => {
      
        
        tile.classList.add("flip")
    }, index * FLIP_ANIMATION_DURATION / 2)

    tile.addEventListener("transitionend", () => {
        
       
        tile.classList.remove("flip")
        if (targetWord[index] === letter){
            tile.dataset.state = "correct"
            key.classList.add("correct")
            checkWordle = checkWordle.replace(letter, '')
            states += "c"
            tweet += "🟩"
            
        } else if (checkWordle.indexOf(letter) != -1){
            tile.dataset.state = "wrong-location"
            key.classList.add("wrong-location")
            checkWordle = checkWordle.replace(letter, '')
            tweet += "🟨"
            states += "l"
            
        } else {
            tile.dataset.state = "wrong"
            key.classList.add("wrong")
            tweet += "⬛"
            states += "w"
        }

        if (index === array.length -1) {
            tile.addEventListener("transitionend", () => {
                startInteraction()
                checkWinLose(guess, array)
            }, {once: true})
            
            hintContainer.addEventListener("click", flipHint)
        }
    }, {once: true})
    

}

function getActiveTiles(){
    return guessGrid.querySelectorAll('[data-state="active"]')
}

function showAlert(message, duration = 1000){
    const alert = document.createElement("div")
    alert.textContent = message
    alert.classList.add("alert")
    alertContainer.prepend(alert)
    if (duration == null) return
    setTimeout(() => {
        alert.classList.add("hide")
        alert.addEventListener("transitionend", () =>{
            alert.remove()
        })

    }, duration)
}

function shakeTiles(tiles){
    tiles.forEach(tile => {
        tile.classList.add("shake")
        tile.addEventListener("animationend", () => {
            tile.classList.remove("shake")

        }, {once: true})
    })
}

function checkWinLose(guess, tiles){
    if (guess === targetWord) {
        danceTiles(tiles)
        hintContainer.removeEventListener("click", flipHint)
        tweet += "%0D%0A%0D%0Ahttps%3A%2F%2Fwhomi%2Eonline"
        tweetElement.href= tweet
        localStorage.setItem('wonToday', 'yes')
        localStorage.setItem('guesses', recordedGuess)
        localStorage.setItem('states', states)
        localStorage.setItem('tweet', tweet)
       


        stopInteraction()
        return
    }

    const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])")
    if (remainingTiles.length === 0){
        showAlert(targetWord.toUpperCase(), null)
        hintContainer.removeEventListener("click", flipHint)
        localStorage.setItem('lostToday', 'yes')
        localStorage.setItem('guesses', recordedGuess)
        localStorage.setItem('states', states)
        localStorage.setItem('tweet', tweet)
        
        
        stopInteraction()
    }
}

function danceTiles(tiles){
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add("dance")
            tile.addEventListener("animationend", () => {
            tile.classList.remove("dance")
            

        }, {once: true})

        }, index * DANCE_ANIMATION_DURATION / 5)
        setTimeout(() => {
            finishModal.classList.add("fade-in")
            finishModal.style.display = "block";
        }, 1000)
        
    })

}






