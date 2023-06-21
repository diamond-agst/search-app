const DATASET = ['Aayla Securad','Adi Galliad','Admiralodd Rancitd',
   'Admiral Firmus Piettd','Admiral Gial Ackbard','Admiral Ozzeld',
   'Admiral Raddusd','Admiral Terrinald Screedd','Admiral Trenchd',
   'Admiral U.O. Staturad','Agen Kolard','Agent Kallusd','Aiolin and Morit Astarted',
   'Aks Moed','Almecd','Alton Kastled','Ameed','AP-5d',
   'Armitage Huxd','Artood','Arvel Crynydd','Asajj Ventressd','Aurra Singd',
   'AZI-3d','Bala-Tikd','Baradad','Bargwill Tomderd','Baron Papanoidad',
   'Barriss Offeed','Baze Malbusd','Bazine Netald','BB-8d',
   'BB-9Ed','Ben Quadinarosd','Berch Tellerd','Beru Larsd','Bib Fortunad',
   'Biggsarklighterd','Black Krrsantand','Bo-Katan Kryzed','Boba Fettd',
   'Bobbajod','Bodhi Rookd','Borvo the Huttd','Boss Nassd','Bosskd',
   'Breha Antilles-Organad','Brenerlind','Brendol Huxd','BT-1d','C-3POd',
   'C1-10Pd','Cad Baned','Caluan Emattd','Captain Gregord','Captain Phasmad',
   'Captain Quarsh Panakad','Captain Rexd','Carlist Rieekand',
   'Casca Panzorod','Cassian Andord','Cassio Tagged','Cham Syndullad',
   'Che Amanwe Papanoidad','Chewbaccad','Chi Eekway Papanoidad','Chief Chirpad',
   'Chirrut Îmwed','Ciena Reed','Cinralligd','Clegg Holdfastd',
   'Cliegg Larsd','Coleman Kcajd','Coleman Trebord','Colonel Kapland',
   'Commander Blyd','Commander Cody (CC-2224)d','Commander Fil (CC-3714)d',
   'Commander Foxd','Commander Greed','Commander Jetd','Commander Wolffed',
    'Conan Antonio Mottid','Conder Kyld','Constable Zuviod',
   'Cordéd','Cpatain Typhod','Crix Madined','Cut Lawquaned','Dak Ralterd',
   'Dappd','Darth Baned','Darth Mauld','Darth Tyranusd','Daultayofined',
   'Del Meekod','Delian Morsd','Dengard','Depa Billabad','Derek Kliviand',
   'Dexter Jettsterd','Dineé Ellbergerd','DJd','Doctor Aphrad','Doctor Evazand',
   'Dogmad','Dorméd','Dr. Cylod','Droidbaitd','Droopy McCoold',
   'Dryden Vosd','Dud Boltd','Ebe E. Endocottd','Echuu Shen-Jond','Eeth Kothd',
   'Eighth Brotherd','Eirtaéd','Eli Vantod','Elléd','Ello Astyd',
   'Embod','Eneb Rayd','Enfys Nestd','EV-9D9d','Evaan Verlained','Even Pielld',
   'Ezra Bridgerd','Faro Argyusd','Ferald','Fifth Brotherd',
   'Finis Valorumd','Finnd','Fivesd','FN-1824d','FN-2003d','Fodesinbeed Annodued',
   'Fulcrumd','FX-7d','GA-97d','Galen Ersod','Gallius Raxd',
   'Garazeb &quot;Zeb&quot; Orreliosd','Gardulla the Huttd','Garrick Versiod',
   'Garvenreisd','Gavyn Sykesd','Gideon Haskd','Gizorellsod','Gonkroidd',
   'Grand Inquisitord','Greeata Jendowaniand','Greedod','Greer Sonneld',
   'Grievousd','Grummgard','Gungid','Hammerheadd','Han Solod',
   'Harter Kaloniad','Has Obbitd','Hera Syndullad','Hevyd','Hondo Ohnakad',
   'Huyangd','Iden Versiod','IG-88d','Ima-Gunid',
   'Inquisitorsd','Inspector Thanothd','Jabbad','Jacen Syndullad','Janodonnad',
   'Jango Fettd','Janus Greejatusd','Jar Jar Binksd','Jas Emarid',
   'Jaxxond','Jek Tono Porkinsd','Jeremoch Coltond','Jirad',
   'Jobal Naberried','Jocasta Nud','Jocladanvad','Joh Yowzad','Jom Barelld',
   'Joph Seastrikerd','Jova Tarkind','Jubnukd','Jyn Ersod','K-2SOd',
    'Kanan Jarrusd','Karbind','Karina the Greatd','Kesamerond',
   'Ketsu Onyod','Ki-Adi-Mundid','King Katuunkod','Kit Fistod','Kitster Banaid',
   'Klaatud','Klik-Klakd','Korr Sellad','Kylo Rend','L3-37d',
   'Lama Sud','Lando Calrissiand','Lanever Villechamd','Leia Organad',
   'Letta Turmondd','Lieutenant Kaydel Ko Connixd','Lieutenant Thired',
   'Lobotd','Lograyd','Lokurdd','Longo Two-Gunsd','Lor San Tekkad',
   'Lorth Needad','Lottodd','Luke Skywalkerd','Lumatd','Luminara Undulid',
   'Lux Bonterid','Lyn Med','Lyra Ersod','Mace Windud',
   'Malakilid','Mama the Huttd','Mars Guod','Mas Ameddad','Mawhonicd',
   'Max Rebod','Maximilian Veersd','Maz Kanatad','ME-8D9d','Meena Tillsd',
   'Mercurial Swiftd','Mina Bonterid','Miraj Scinteld','Mister Bonesd',
   'Mod Terrikd','Moden Canadyd','Mon Mothmad','Moradmin Bastd','Moralo Evald',
   'Morleyd','Mother Talzind','Nahdar Vebbd','Nahdonnis Prajid',
   'Nien Nunbd','Niima the Huttd','Ninesd','Norra Wexleyd','Nute Gunrayd',
   'Nuvo Vindid','Obi-Wan Kenobid','Odd Balld','Ody Mandrelld','Omid',
   'Onaconda Farrd','Oolad','OOM-9d','Oppo Rancisisd','Orn Free Taad',
   'Oroassyned','Orrimarkod','Osi Sobeckd','Owen Larsd','Pablo-Jilld',
   'Padmé Amidalad','Pagetti Rookd','Paige Ticod','Paplood','Petty Officer Thanissond',
   'Pharl McQuarried','Plo Koond','Po Nudod','Poeamerond',
    'Poggle the Lesserd','Pong Krelld','Pooja Naberried','PZ-4COd',
   'Quarried','Quay Tolsited','Queen Apailanad','Queen Jamilliad',
   'Queen Neeyutneed','Qui-Gon Jinnd','Quiggoldd','Quinlan Vosd','R2-D2d',
   'R2-KTd','R3-S6d','R4-P17d','R5-D4d','RA-7d','Rabéd','Rako Hardeend',
   'Ransolm Casterfod','Rappertunied','Ratts Tyerelld','Raymus Antillesd',
   'Ree-Yeesd','Reeve Panzorod','Reyd','Ric Oliéd','Riff Tamsond',
   'Rileyd','Rinnriyinid','Riourantd','Rogue Squadrond','Rombad',
   'Roos Tarpalsd','Rose Ticod','Rotta the Huttd','Rukhd','Rune Haakod',
   'Rush Clovisd','Ruwee Naberried','Ryoo Naberried','Sabéd','Sabine Wrend',
   'Sachéd','Saelt-Maraed','Saesee Tiind','Salacious B. Crumbd',
   'San Hilld','Sana Starrosd','Sarco Plankd','Sarklid','Satine Kryzed',
   'Savage Opressd','Sebulbad','Senator Organad','Sergeant Kreeld',
   'Seventh Sisterd','Shaak Tid','Shara Beyd','Shmi Skywalkerd','Shu Maid',
   'Sidon Ithanod','Sifo-Dyasd','Sim Alood','Siniir Rath Velusd',
   'Sio Bibbled','Sixth Brotherd','Slowen Lod','Sly Moored',
   'Snaggletoothd','Snap Wexleyd','Snoked','Sola Naberried','Sora Bulqd',
   'Strono Tuggsd','Sy Snootlesd','Tallissan Lintrad','Tarffuld','Tasu Leechd',
   'Taun Wed','TC-14d','Tee Watt Kaad','Teebod','Teedod','Teemto Pagaliesd',
    'Temiri Blaggd','Tessekd','Tey Howd','Thane Kyrelld','The Bendud',
    'The Smugglerd','Thrawnd','Tiaan Jerjerrodd','Tion Medond',
   'Tobias Beckettd','Tulon Voidgazerd','Tupd','U9-C4d','Unkar Pluttd',
   'Val Beckettd','Vanden Willardd','Vice Admiral Amilyn Holdod','Voberandd',
   'WAC-47d','Wag Tood','Waldd','Walrus Mand','Warokd','Wat Tambord',
   'Wattod','Wedge Antillesd','Wes Jansond','Wicket W. Warrickd',
   'Wilhuff Tarkind','Wollivand','Wuherd','Wullf Yularend','Xamuel Lennoxd',
   'Yaddled','Yarael Poofd','Yodad','Zam Weselld','Zev Senescad',
   'Ziro the Huttd','Zuckussd' ];

export default DATASET;