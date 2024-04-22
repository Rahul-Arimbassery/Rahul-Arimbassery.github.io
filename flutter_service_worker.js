'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3d81f2e51e963a5c60280c71c0fa4e8c",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "14da8baa24ff98c45ad15b6b2166b6a1",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b98a989b3b30f319f868949c4d71e81b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29457ef8682ebcb386ef934c01c0c15e",
".git/logs/refs/heads/master": "29457ef8682ebcb386ef934c01c0c15e",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/01/2b9216dbc422e916e256170f9fc97e77dcf036": "b6b9fa1978fdb3dbc94d2dc54edec32b",
".git/objects/01/4cfc915020708c6286d02a8852dc6ca9c39af7": "f3bff0eab480d2c3703a216cef186970",
".git/objects/01/d6c61fe5eefbf20d75f17644a0938fb5747d33": "cc18b1a51ff2632bb09172f1b3d289aa",
".git/objects/02/27422eb625c5af8dac3e5f0868412e284986c6": "6c5eef6eb6fd35e6fc7772e9ec0f0666",
".git/objects/05/0fbc284e67f21994c3596cea513a2b13c09599": "acb67174bc92ff9fadeaeef799e43995",
".git/objects/05/7ca7104a6f390c07c78c50e423152e36075310": "fa05a398ad2b5e8a224bd642265a336f",
".git/objects/06/ba9b469e7476491848a57fd65ee612ac57c234": "5688ae044ed0c4789a823622445323c6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/51f931609cba823a7ae98e73c792e34aeeb09f": "571e4df55733dd5c79e4fa202f3024ec",
".git/objects/09/c32d120c640aaa3338be3c4375637d07b7a99b": "2a13f61f2fdf230441a4dbbcfaf8d542",
".git/objects/0b/09af2f61443d1ce34cc2067b5212146e68aaee": "0c92af992bec10a751fd133e57952058",
".git/objects/0d/47941f47091109fd2a519e08c6def81d3169b2": "365bb832698afc1a10a160f3e72e84e2",
".git/objects/0d/dc7425b466cdb1b792f5a0591a3509df9d0662": "774e11fbc26b42305eeb1117ea1102ba",
".git/objects/0e/e59c2335d97bc10e4f29e2e387ee33a13c2aee": "1dd6b2f81bd154a7599023e3ef7f3e2e",
".git/objects/0f/5b9c13218316ff95e5afc492c88b9a1edfe3b6": "9724699d0639e60f4465961818c967d1",
".git/objects/0f/938421f0ea9a2109753a93a092f0b5ff266078": "716a65ecb03dad9993859371bcab0e35",
".git/objects/10/6646b288cd75ea69daa9cb34ecf1d4cf436b6f": "6f928d53937384f59aed8e554a9eb13f",
".git/objects/12/a1c719ca66981afae72ff750ef91325128ba9a": "429ac03fc0d76943209b0a89cf33fe9e",
".git/objects/14/90b4acdf7772e3dfb71c6f2553cd1e420e6300": "4e19c5887cea621c346ad15702e22834",
".git/objects/14/9b44d386eb648b82f4b95db7718bfe3e096f07": "5cac7a2ddd43a60cd7efb05466a739cc",
".git/objects/15/b082a70c181bfd58f6949665cfb093182c80bd": "8e9b8c83edbe190b7dcee1f45db2ec50",
".git/objects/16/2480a5af9af6e5ddcd7badb5fb3a16d03a28b9": "0bba8041a21172bdc4249eb4af06c36a",
".git/objects/16/4d1d00b7e5aa1d1a3f9704c93d296ec22bd28d": "85daace0bbc27993502d4333b58e3514",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/cae858b62b4e0e400b7cecac40a3d43388e0cd": "2b568da4407a58f0f3ecbc49d3f3e08f",
".git/objects/18/3a50b12d0d112d21ea0080597cf6821d353f55": "8c85e64815ce220e6d457e2802dcf394",
".git/objects/18/3e7804f4007844a1b17d97945304d7998a931b": "646ac9e4b652d18ebe26cf130dcbbd33",
".git/objects/18/98a3eb9724debf1bf2fe449c9fa8237d0155d2": "459a73842bf93bec5dff80228d8cab43",
".git/objects/1a/e3fc209de0e3e8c3e122708146bed286595fe1": "7bedf8f03660396a0ccaead864a41a0e",
".git/objects/1b/31923f1238fe8023f0680f1e87286e99bd6e2c": "3d36318e89427baed5090aed6f026d04",
".git/objects/1b/7eada195ad4b465ccf67279e68578fb994f98b": "ccea1895c7b8caea3f1ddcf5986ad8fd",
".git/objects/1b/ccab6f85fdf61c1a3d93d063a39fa174aa5072": "88695038a3885f25b8d49bd9ed12e6d9",
".git/objects/1e/f0d8e77652f0b19606a9a84ca5493d45eb52f1": "24784df43cc3214d7148724fa06a07d8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/64f2cb5b001d55f3439883c994f825af54a3a5": "0b674030572ed177011e24ba2ca06147",
".git/objects/28/619a134604a5dd2a63909e485a381665b3e805": "ece51ca094b4aeeca740855746f07164",
".git/objects/2b/8e0b0279327da9d52467d40b042ae0840a5ff0": "31807a91985ae6ea45a6b7023d4fda4c",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2d/3e3eabceba253df684d963748f3accfb4cb1e4": "b0e32132bcb82fb5b848055d5c01cea0",
".git/objects/2d/c13241b8e335c406fcaa3ea33bac376501bd6e": "dfc072c1fd91bae207fe9f5378c6cedc",
".git/objects/30/f904db176c84da17f6b01c67fad3990be1aa3d": "2e984180df1d203dfc85830e38872e7c",
".git/objects/31/35eb16682d6e5679132f30d4629155282c4b46": "e089da93f64ac3730a3b849b730ea840",
".git/objects/35/f4e559249df5437b933d15bc2889b9d17a7006": "e9a64c249a1a7ef67631e6f20e48703e",
".git/objects/36/173fc2f082ba2d90e7ee7e8c7ea6c58a07afd7": "76f46dd0aefd5d91ddbffd9c237c9499",
".git/objects/36/500591c345fc5334816531bdd1418fccfb0d18": "6c0a617d25405f7e67822d5d96a2a8bd",
".git/objects/37/2e711b635c9ac2df85132df32e5588e07c1c3b": "d976acdd597c569d981641cac67b88f5",
".git/objects/3a/5d40bac68456f24567068455241e3ca4013018": "995aa2a5f8d642e7bb9750dd467a749e",
".git/objects/3d/c9a7afc176ec1d05f9e266c4ccd6e6d19ab3d0": "149e9f3fd6466c332ac8ed85c56a8397",
".git/objects/3d/dae3c240d24e4563cbf866c7935f6cf0be77a6": "704ef8b049ad5144f901e58d4c8f22d7",
".git/objects/3f/44cedb2c9d991bf0209218ba3d983328351371": "cbbe8cb8f4248618cddee80971c6b5c4",
".git/objects/3f/7c792e1df896c16d45e0e419f40acbb1c2f07d": "2f8739d2ef57ef0573d1519df91197dd",
".git/objects/3f/c3d8d75897db36caaf7afb2614844b5c7a4f1b": "23d3c23dd47da8b890dbe4712a42256e",
".git/objects/41/c16ddfff1c142c612cd9ca0573ba3e8aa1a226": "4ecee14add2eac8bc65263487e2d1a8a",
".git/objects/42/ebdf75322be91d6d81d13fc13ec0fbbf1aa7e0": "e2931220a7c0e53572ec1ff9fef44109",
".git/objects/46/52154a98a7d92fb8f0b853b2f4e4baaf3260d1": "e9c608d39e7a97634d8e032c465b46f5",
".git/objects/47/c3c3217d3d1ab11d5cbb437e9f1498591f27a0": "1cecea50792903e7a0a64a55a0ae3bd0",
".git/objects/48/b179be18102d9b06c64fe2144ed86dce4a6a43": "d5e1e8dfdb8d97dd0f95f6dfb36a6d76",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4b/7a013d3b5a4b5a3b2a99b589d44eb149893694": "c231467166a6d62a8037d01b88322cc8",
".git/objects/4b/9b25a74e6911dffea2b6d03c5de38e7897daec": "8f3c613d57d9a7d08afe0f8164900345",
".git/objects/4c/5967480df85c39407566f3aa66dffc6b872f6d": "b32a7daced7f61e40ac616715d2d7a1c",
".git/objects/4d/5cb63906eb533e3516b85558da8b722fe40481": "d573669ab7d6a306ac261de18a7bdc81",
".git/objects/4f/2e910e1a736e674b47dd290ab89aa921cdedc9": "d98a3c744e75d6a70969f245427bb455",
".git/objects/4f/bf325206354f140f394a0fb9afb13e885f8649": "30113ed3266ec70b3f346be15eb01c21",
".git/objects/50/2c509e58a408ae00fdd463ff5336cd06442bf6": "b932794385707b094ae2d55ecac75411",
".git/objects/51/160b7358b6244557ab36704a2a685b219ef7f2": "0c46afa477f11a3d2939f0e0b1607dd5",
".git/objects/51/258948d52620027a344745c4c6f5ab82f473b0": "eaaa16e37ddee2db3250649ff2feb5ae",
".git/objects/51/c9ae038842f8aec0a9fa18e3aead8e9169a1f2": "a707eec8b16f03cc9f711927185ec909",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/8375bd2bcb8d228e1cd5d680666ce1eac0962b": "f71bc7dde7fa9987b5bb7776bd073952",
".git/objects/55/615186ece235e85ac02490fbae0513ff667ede": "f134b6b44458ee6c6bd97fe1f98266c4",
".git/objects/56/b6a281c2a1e0d9e511d42c86024feb0ccdef75": "5b1a8944b8383f3e0d4801b4bc1c7314",
".git/objects/58/da06f281451cf18d6a118e23fe8a789a0d75f8": "693168d50521b238ec394a3a4ee5eef5",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/ac05ba822de527618e294888bd6ae83f513b63": "f3ff4664abf2b32ddc7abf0f0f320a43",
".git/objects/5e/70c8d05a0f30d469b4d443cc19011c8e140302": "03346ea4797f1a07b17ece42c46d3429",
".git/objects/5e/e27b2e6c0a927795a5c62412d565012bc3b455": "1612ff99ff825a6a1029ab3f1bebbe6c",
".git/objects/5f/30eb9bbbd7c332e9a4090a130e07fb342ad000": "dac894cfbcaaf07d61029a120e3d7c52",
".git/objects/5f/b3716d161ae5dda17499c06ae86f69c6f75a3b": "d24fb2da7669ef8d683e1e4213af209d",
".git/objects/60/f4159b73f58bdca39863bf772ea2a2d4838930": "c480f4ffd48053e64411b3c89296a495",
".git/objects/65/ce4866ed9571054b6ec7592aea6bcbe1431a8c": "8adc8b0362adf0aa467497b7da9710ff",
".git/objects/66/349d8286e2e9cb6f7b75481fe6bab9a2189978": "000936be647f481cc7af353e7db87c6a",
".git/objects/66/508d4e757cc6c80d69383aa0e359f1f83f9871": "e10e3a582bc98570b359026cab551b05",
".git/objects/69/0b1d9cb8e67866f4930da7097832a4b93eafde": "97edceb337f5fec49c4787274c028ce5",
".git/objects/6a/799bcc1e3e24b6e18dcb5c916d680dd9793d8f": "5f478894c7e8dab74607b4d777665dc8",
".git/objects/6b/321c94612f2c2f261f9b48c86191abae57aa1a": "f3c731e986e04e9a48124a5eacc84304",
".git/objects/6b/7d5d624ad4f2478e18e4720ca5273a64b4e79a": "f0f684dfdfc2fdfac97eb56745b705fd",
".git/objects/6b/a4a16cd534c4fe95e0db1baff675ad495d6b9f": "b6827cb519df8b9797db3970cddc9b39",
".git/objects/6b/ec5a0cd3aa7c089c812e746f649ec3da3441ae": "92f890cde91c72915d5fd4288e8ff6e2",
".git/objects/6d/a63d1ba4d23d4c60203ef95ca6c5580649c9eb": "c107384a763c07222605120d99796658",
".git/objects/6d/a7599a59df0c57585b4320e27fe7fdf96ab6ce": "5c708eb3287f3d53cdbcbf192a8b55c0",
".git/objects/6e/4019af9107afcc827854dca9f4131b96140561": "ae15a571a7f0ad6aa321aa2e6fb56c72",
".git/objects/6e/c803c38fb4cfa0ea2d1292c2a4cca2fd28c88b": "01abf221d5180174ba4dcb3373e8bef0",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/a6d6ab33c5f9bce4060a197c968927da283f7f": "79daaed3e70af84b4c38620c787ae3ae",
".git/objects/70/dffd2365e17e095193534593fbfc29a7102c1f": "4884bf1f3cc4b22943fedacc505f1a4b",
".git/objects/71/58abfdb9c257d1711020582f34257e56269248": "001bde5be4a7991a116fc351cc83a474",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/8c83c65e4cd3252f67f0a1b437bfaaaa01b9e3": "24d38eae5afa505b1678b18600a7ac12",
".git/objects/73/a8491867524f84a260d44a78a0a63c96aa1a66": "a5c74c70f4030c69f8634d1652df1649",
".git/objects/74/a4a226c1621e05e6b05f750b894423cf486840": "cce6bdcd3ef657edc21e2f5d689158af",
".git/objects/74/aa8d6c3e3f4617534aa7907f191306fdc2bbad": "b5d4789496397b63001d32f87f4fd454",
".git/objects/76/dd363ac124e6ada04120ee4015ee8c84ac14ad": "93427bec0edca9f9c8ad54cb803d7270",
".git/objects/77/d8bf247ef406322300fa962e6a87aa86161432": "ac09e4fbb4389fa4da69a63f921ea074",
".git/objects/77/e511abceb533c2ec79f51aa9795ede5b4899f2": "f5eb440a102959006328452d8610af3c",
".git/objects/78/41dc441cff94b782f6641aa8ba33767ed0736f": "878aed1918ea289b7ba2613d19e5f055",
".git/objects/79/18c8288453b3c26e2c47298bf1fd870f8663e0": "e1b73799a9ee701e0a5383112cfc7248",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/f8ee8a28d529fe5480fedfbc274f13193e91ac": "d60ef955ffc09e31346eddbdc343ae21",
".git/objects/7e/30a12660f1f4998e757a95714de1f872e01898": "ae38e50a432e0dad6ee1e5d042ddb0fe",
".git/objects/7f/225f49511bb809cafc28a312fade2a3545454f": "a474d42d191e76e7b4e4bbf7fd0ecef9",
".git/objects/80/01a7a2224bda7bdafb7c1133163e4731194113": "a553a5d42ecfd838356a6c6e9dcfc8de",
".git/objects/80/6ff7dc6192e34ce3358dbf5ad3181c06d78770": "049d7b395d66c63247914d79e105beb2",
".git/objects/81/b9b1a6a4ce5438902571f6e93a9f7ded316905": "5e3be5c75889e86409eff40e8200a0fb",
".git/objects/82/b0de065f918ded881b75013951a4b8ec3f2220": "2434b6eea2f6ff54e7ba20e0d89a5674",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/83/ad74027633905d1af7940b3ef452a6dd8c39b3": "546ebec3429c2df4c55073bb5d53240c",
".git/objects/83/f4c608da2e59142d21604bc083f8d105b70d8a": "1f94e76af40eb693a995dcff5b1e285b",
".git/objects/84/2c25a7d399a46e867dabba5bad64910d72b804": "65fcaaba9d9670e1505ca7433a312086",
".git/objects/85/599b6a069bad490e1a4ae0c5cdb33637ba3aaf": "7ec5cda297e74fd2afdb913f53ce04e0",
".git/objects/85/74ac47ab3512c8a88429bd3ec9cdc2b783217f": "558c19133c79fe3a4963624eaee33bf6",
".git/objects/85/c588374cad50e971aa4b05e31385c7ed3d62f3": "6846a5a0b7a84fea78dfb58b63eefa64",
".git/objects/87/ecf4a555a2a72194b89f3514fe191af986ab59": "65a85c79a807becff6ac32b5125fb58c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/af67218819104030965decbc297ee0cf13b313": "14b56cfca84bffb3c560e9d5c69f6edb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e7f9b66f2db384ec0cf5cdc0cacfa648a06a18": "151385d135afb73b4927b7a6a845ac7c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/230df945ad338dcad51ff36e2ee972d55ba57d": "c9310f030a44e29227816de350d4072c",
".git/objects/91/33db5f3725bc7467c27f00ab593f4b34923bfd": "2cac7b890a2449abedb618e0e092fc9c",
".git/objects/93/1b9e66bed9bb1047723d9da70847bbe3bae50b": "cf1ecf0635691202cfd181f8b986b19c",
".git/objects/93/fc16f9f124619b1955664c23b8e8685395cbba": "ea3c8e9bc404ab7d9d2eabde207312f6",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/818413abb4aadf41f6914a65e0557672280f10": "be122d115f90192430b337f0abeb3297",
".git/objects/95/c8fa91f82b86f30b9deb4dbf5a94872b80f07a": "1a832ac28c7e0412837fbf840fe0c7ce",
".git/objects/96/1e3e73a80497c6cf2676e1b7e53d03794d6e65": "7297a7e8d912fe4a533ce4824d71b907",
".git/objects/96/3eb3fd833635153e12028e6781496cb937802a": "382a37cb76adce229cc695c6a3ee1e3f",
".git/objects/96/c67256ea7731ee1ec7896483bdba98a90ac1d6": "8f597c413fa60c78abc39d94ac5251e3",
".git/objects/96/f0c6830233a6642dcad77c6039009b354d306e": "da98bfd92ce2d4d5ba0419730e2fdb50",
".git/objects/97/cc7de9cf8685fb62925d2078ad18b8eb7ec2c2": "30366d263faa163803eb3d927643b2de",
".git/objects/98/23f430d252bf9dc6c93cca9c5e19316fda9dd6": "d0f895b2abd7c5c9efcf0c4878e385ba",
".git/objects/9a/c48b4fe4d682f49bebbe4301a23def400aa33d": "6dad1df1347dc3947f24d634d1b459cb",
".git/objects/9a/ce04a9b3c6bbc77ff99be4e264348c3c504f9f": "bddd056735da624c4b0d35656ec205f6",
".git/objects/9b/cc23e756af017005eea61056bac4156f75ba7c": "887a7a649683be16f67826bea423e4ee",
".git/objects/9c/b7aed124fd7e24d6b11d344d1601a49cef41eb": "508c4c4824f89b7940640e400eec6b0d",
".git/objects/9d/9bfa320447c915a2a2a2e80af8c4dddda63771": "bff3f475339f1dd80d0a25b105b0c9fe",
".git/objects/9d/dfc6a3b316273c57c85e5ba7575f9487daef32": "3701415e2aa195e799b46c1c86746817",
".git/objects/9e/55918190a9b181fa80ced04fd4a96d942e5823": "1f4692dbdc1e2e03a2fbceb1543d0fb0",
".git/objects/9e/8ffbca48f1d8633aa51ddf9f63f61827ec7cf3": "0a6dd34400e128648d738ef73fb230f4",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a3/6f913ef8e02f37b614359d35ecd37b315ef633": "be0154e54a391786c1724600875ecdfb",
".git/objects/a3/d5e77e7154c0832ae158a55b374c7087834630": "c7c9f19efffa7020772d0803e64ec913",
".git/objects/a5/0cdf7752fdb6a7f68e5edde1b4cb957e9c4a3f": "aa5421e5a2362142061ce3b5e387e0a7",
".git/objects/a8/c6daa55780664dc78e6be9627e59651b439093": "39406c183cd48076a0c1d04b1dd43e4d",
".git/objects/aa/2e5555698dd0de2e1497fe8126fa9bcedfb55d": "50dbb8ecdd94e5bc798b0cdeff0f0612",
".git/objects/aa/46acbfb7ce527682cec9bf2ccf97cb03c427d7": "6628d2df1dd396d72a9f5a87fc8f06e7",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/b65fa3b8bef7d6c4cc81d3c9ccd2fbaa73637f": "9ee9c802f87299a7be61c8bf63ccecb7",
".git/objects/ac/c2d70e01fdba541759f80c5b077d7d6efc994c": "a9fec119726250aa9c08b9fdf17bb2f4",
".git/objects/ad/250bc1d89a423259be4be3cc7f66055fc499a1": "8362d67d30184ccc2cf043cc8e9ad7d3",
".git/objects/ad/63d98de1f9605c5b3b698e19e422d8b2e05b96": "3fe5673ed846a52b0104c5928c2705a7",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/5ecaa89733c5fc23cf621ba48ae00a75d94803": "0402e3e3f0b65e43d38ba72b606d796f",
".git/objects/b1/9372bd36aa6fb9a3f6f2c8d05e3e9357746392": "b2492aa8fcebf2582d15db7008ae1c3b",
".git/objects/b4/2ace48df8c7347a93163bd7050b56b097cd2e1": "6813af780e00ed0141ddabf69ad21807",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/a879181febf4ae0624597e0162380a16ba826b": "a63e9b3271f3c15d2a4e395f920509d2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/49c2f2dcffbdb282be8f920867369f606b3d01": "a5eb29e001eb6e9b0957d49ca8120196",
".git/objects/b8/58cf38b026e781d7a6b9ebaf7eead6fdb5c3ae": "6363cf23f2b239b7402dba8f11ddfef3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/43ac0f83f0929abe44e813efe11b1770c7e161": "8ba673dd00e0a7cab6667da2697696df",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/ba/7b3eea68d41d543b43d8a55b1af62be75530a0": "1a72e305cd623a075ddd1ec39ad8cd33",
".git/objects/bb/474062f6d8da74d24172e0b61cdd713de898b9": "76a085c39fd46b48399273ff60360b8e",
".git/objects/bd/110641d09ecd0039748cc4382fbb104e64b907": "be60f81abd0350d2fc36719dd8680213",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c0/1a10cd0f2ac3e44aac5605cf2a735bb514d40b": "b1ab2672f526e2e5da9922bd2448ed4e",
".git/objects/c2/496cc9739c7aa46deebe3f1341bd50093b9539": "c1b82e9d651e566e2297a851e633ecff",
".git/objects/c2/9b655dfadd1dde62f0fe50093a27d1bb9dc985": "bf1b477748087986a7984349eff183df",
".git/objects/c2/da28b9cc0c6144292e2f8e649e3a23e776dae6": "ee905f3bd82dcfeef120a11b684635f3",
".git/objects/c3/efcb743acac705efdad951f9d96a2bc66f9d76": "9d6b41c0a8ccaf1372002f48468f3145",
".git/objects/c5/1daaa8997adae8874928466bda8d744d961b57": "9141b0ba27d58c1ea94fd65b8cea57ba",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/6b45f7176829d0c0508892ad63cbf883370661": "86cda8bfd6c418de60b4841aedf93a9b",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/9e0862bb8205a39a75b2cac6066011f7903de4": "d35db6be874a54e8befd7a03e62e86fa",
".git/objects/c9/5bc7b7c9bd5b5f8fe9840db656c5cb3ce142e2": "7b275c748fa82e9a3f53ee1b368ac590",
".git/objects/ca/78fe00fdfa95e4951e184209a8410e6dd3bf24": "8d5e4cbab4afc7ed11763edbaf582c92",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/b37793da956c625f3eaf7781a792d9b25b92ab": "b98d1753ea48c4fcd0f00b393c2e3adb",
".git/objects/cb/85028c4d54a38579841d2ad13b9832c9edfb15": "1f0f6e08ab1cff28f19e42b68a8246e1",
".git/objects/cd/7071811295ca4815524d2daf0184db20439a8c": "a3bc58606e84baac27a332265d70932e",
".git/objects/cd/71e992ccea42b2a18e1eeafbf9e4b629b2b37c": "784f7728e10b0a6c6ffb924fcc46ea5a",
".git/objects/ce/3821971480ef6795875459c20a5af19abed892": "2d6c6ca4c97169dfdd395dbab81262f4",
".git/objects/cf/0c0b142017fa2fd8a66736e5be2408a8e06ce2": "063a1c978c88650d010d1d4710655fa6",
".git/objects/d0/c42c1fc515a4b39c58dcb18fe1c6b8437b08ba": "d91d443af0c3727d9a535225d607f9d1",
".git/objects/d1/c17fca9f284605a6f6f45c3873b2e7bb4cf3ec": "1593a089125003977544b845146bcbcf",
".git/objects/d2/deb1452b0f41ae6d9278496a483d4c52b31776": "7187ef1f65119699858d0a67a159d7bc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/40e85f4a85aa92eb5f0d43a29e3965ea0e0fa5": "575381adb2be0ed4f7324646694d1d71",
".git/objects/d5/d23ce15fed976af5dc4898edbb56e522b2edac": "8a9b57c84fecfd80fff16538ab34100b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/4b1ff36f0e32fd17b263706d087191c6624fd5": "82a10799f7a0bfc680a07a696441cbb2",
".git/objects/d7/c0ba1cd3884e31db23606c1ffc5fe532e5fcc5": "b7e39ccafc7bef525e942a5715850775",
".git/objects/d9/76168ee779822d55650cdcaefbb61b0210c00d": "7a736ebde44ad1f6ddf7f0f9f9d0434d",
".git/objects/da/0ed95df4727ab77a82adc5e2c0a06fde040674": "2a181ee40584b7c370dabdd6461a3e3f",
".git/objects/da/e5bc4007d0442e733290b930c47b658a3be54a": "bb42cb058797c86bddad85bfeab7f98b",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/dc/5dc0dc14aba29e8e5d7e81b2d08d5ed3892214": "d8087cb722001f380cd7683f8589b9a3",
".git/objects/dc/615bc3ff309c9ea0433d977937a18edfd31954": "791c65fd3540b90bf7da41509ee94024",
".git/objects/dd/6768a966b86a5752086e126ec890285a83717e": "47d9d2cc47001432c908c97b088438b9",
".git/objects/de/af5583268accbb75ff76addb663b976c958e2e": "4a5da314b3e2fcff6e0f2e89017f69f4",
".git/objects/df/61d6bbf9dfdca9dbfe1f828e05403613a68ab3": "dfa21893c6d3e64ab25969b111a718e3",
".git/objects/e4/a7da6815adcdd2f81874e68bf7bdc7bfa88b50": "1b2891a7a634b62eb7070d3191791e99",
".git/objects/e5/1653e1606558fb4de17d3d702133fa524a588e": "618142e079da1279dbb1f0478c72461f",
".git/objects/e6/55edf3b81e782da97bbf7aacee4e9226e27416": "d212a4811e7d63bc03dca8c96acd533a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/f08ce06f0a697d85ec9bc7e411d08d6b9fff31": "9a67ee8d543e0f5d9acc66d326663161",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/bd2f234705313a47f0c9a56920c5e285450c6d": "db7e3c6023f183373e6f4275aab06109",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f4017f934035444b7921c874993a9d7ed67079": "cfdcf1d96446bc8e9659ddb353ecba73",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ee/4c41809fef20cab0dce4b4677e90bc7ddd6549": "b6ca2bf0beb7ef0fef70725bbdcb040f",
".git/objects/ee/4d0e2e2effcc3e323471aebef35a55db683e64": "82d2c2f8c20ab625168423bc4fe1ceb8",
".git/objects/f0/82b57a67a0c713687dd0e2f77e7962ea35fb37": "69e9115fa9e4a091a86bb892bec351d0",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/363593db1eadb64b959e1dc5f11d5e8c7fcd8f": "025f9d41ce607960a3ce32a3338e4050",
".git/objects/f3/86d15bebb2295191fb092ca481c47b53652386": "fa8dc1281c08ab6298ee502850393058",
".git/objects/f4/55a5fafc2b7fa57a628932345cf464accbbaec": "1aaa83a6304e0625f0640e0e806a65a7",
".git/objects/f4/d7148808bb037e1eac2d0850a02881f7f3b454": "b5cea10d56eab2bd0c216229f04e6592",
".git/objects/f6/35b0dbeb839721ecde92082a850157d0270c9e": "451ddcde6ab8f2c58be35293bc33720b",
".git/objects/f7/c20c1909dc98cd0dc3e3bcb3b374cef266c95a": "450303f82c8107139ec7e822c2a46cdc",
".git/objects/f7/e786cc3173515e2fc242848aa976889e0e62fc": "d6a424a63988a3daac7abbdceec3b788",
".git/objects/f8/1b9085564886024a84d03f3968800d7225384c": "fd692831c004db328ba0d358939f4d16",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/f8/87a19b754f39c3b0059b9041e57d9f06ff3073": "32769c974912e18d820cdb7b10c997fb",
".git/objects/fa/866d920232ca7cc2f0f6dd15082c7d88bca02d": "8b090aa7643ca35d45f2448cb21f8bbe",
".git/objects/fa/f37e21751a8970b37fd67b35fafe4efe2fa9b6": "7be190f0e3960d479483cc43f13ce468",
".git/objects/fa/f6632a062f5e4cfde9453d23d5b15b48166ab0": "00af07ed082ec4790291a9bc3577d001",
".git/objects/fb/25c5a555d741e374d437abdd4b0e2464ccb045": "9f786a04e2427a747690d1c7e1130409",
".git/objects/fb/977a2a0d9a0df5a9ced36c4521a876ace94eaa": "8a8601bbc069d32c9633e56a336c32cc",
".git/objects/fc/e3a72bc33baad4beee772d636ef53a789f1c32": "723657b2ed656557680fcacb89a3d2b5",
".git/objects/fd/a8f2754fff55a496f054151189940148a56653": "e5ec80420cb4fd02f2c34501661de9d9",
".git/objects/fe/f7e59a36d0ddc8d7cb193c8582bc5da2028785": "73872251d609a2ea51aa522080e92013",
".git/objects/ff/699f3fab5e7132b61e418059d51fbcf3416cb6": "76eaaf3604a2102ba43fc34cafa29293",
".git/objects/ff/d135a597280b43565c893661f77c04d86b50e1": "c29b4c8e9aa148cf93c131fe900fd49b",
".git/ORIG_HEAD": "56f40707b62614cd0704e2d74dae6fb2",
".git/refs/heads/master": "e3c2f23399e4df7ce656b6178f78f5cd",
"assets/AssetManifest.bin": "8d5866f8c2954f6cd18fbb654212cd58",
"assets/AssetManifest.bin.json": "a287140fc198a0e43137554ecc11acab",
"assets/AssetManifest.json": "1cba2779aff31bfd385bb61f307ee9ad",
"assets/assets/icons/facebook.svg": "22520472fe718f4d4d1435a07a86cba5",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/instagram.svg": "17a60c88ad6fd5862547a8d3eb9fbd94",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/images/about1.png": "403f83879700c5a7e8038f30b0974ba1",
"assets/assets/images/about2.png": "71485e9b7ecaa63eaeb7afb95e03f0af",
"assets/assets/images/about3.png": "3b1e220b1998d5dff94dab183a077ce4",
"assets/assets/images/about4.png": "8d09e31a7184cb465a98fdc5b15f05f5",
"assets/assets/images/about5.png": "f1f3fcd8bb83b8384f257b398669c34a",
"assets/assets/images/aboutus.png": "59ee81b7624bfda7c253b9d521cd4841",
"assets/assets/images/companylogo.png": "77746db0f08e6f8474bac2cc295a3d51",
"assets/assets/images/companylogonew.png": "ff1998abe551958fd7ee764c2db77c9b",
"assets/assets/images/contactus.png": "e2ef63baa5d76b22b2faaf6f7214a7ef",
"assets/assets/images/course1.png": "40977d372a8764b6c33027aba3acdd3f",
"assets/assets/images/course2.png": "d36c91e43558ff2f2223c6f88243738d",
"assets/assets/images/course3.png": "a2f182b669032b0c35f74b7c40162594",
"assets/assets/images/course4.png": "82feeaaba00a00542b1c60a753c9293b",
"assets/assets/images/course7.png": "4dd1af7e9f96e5dec1c92a0ca0a648e4",
"assets/assets/images/course8.png": "1eb2a9cad8f85154167f0f6f84b0fc81",
"assets/assets/images/courses.png": "e6599909411dcaf1d80cb560dd465f38",
"assets/assets/images/education.png": "b3cd8eba2f6fd70c4d7f106f230fc4a3",
"assets/assets/images/eduguardian.png": "f81d518187668586282b0161ed0dfd77",
"assets/assets/images/level3eight.png": "fad1896d7ae17f298dc606d82535994c",
"assets/assets/images/level3eleven.png": "e504dfb1c71f931658ab5ab311077b01",
"assets/assets/images/level3five.png": "c90115be93e498aaa9ae66cddf2f919f",
"assets/assets/images/level3four.png": "1aaed302dcc3703a594a5d7ab9acf8fd",
"assets/assets/images/level3nine.png": "9156688757449f9cc6c6495b5285bd48",
"assets/assets/images/level3one.png": "c1070347cd579da400c614cf27812b61",
"assets/assets/images/level3seven.png": "4dd1af7e9f96e5dec1c92a0ca0a648e4",
"assets/assets/images/level3six.png": "5905445cd5bbb91bcc80e7582e716fe9",
"assets/assets/images/level3ten.png": "6a4d7540e4c943f2abfc0b3312a6cfcb",
"assets/assets/images/level3three.png": "605dfde6ed0fac2f10076648cdfe11f8",
"assets/assets/images/level3twelve.png": "31f6b0254dc5d9d6d2a2bb4e9ff1183f",
"assets/assets/images/level3two.png": "f5b99f4737a8367fb6fcf21bfa608200",
"assets/assets/images/level4eight.png": "4ba874a1e706a2fa90cf018ffe205433",
"assets/assets/images/level4eleven.png": "3c5ce5336a913a2eb8e467caccc1cab2",
"assets/assets/images/level4five.png": "3d8011beb6eb62f68422a8771c71b91f",
"assets/assets/images/level4four.png": "b9fae2ad33b5ae9a41c47f5023f58f34",
"assets/assets/images/level4nine.png": "62efbeeb7e86a3b2487fc2fff736f58b",
"assets/assets/images/level4one.png": "9a9083c966ae14ca1b23d3f2c606e207",
"assets/assets/images/level4seven.png": "576426dcc5233cc602e9f4539f8fec34",
"assets/assets/images/level4six.png": "42ad959bf65cb93381a37f195630f98e",
"assets/assets/images/level4ten.png": "5bffa46d9413d29b102b340895103bc0",
"assets/assets/images/level4three.png": "df104b619cb5744094938187682bb055",
"assets/assets/images/level4two.png": "c14a98084b950e765c4de0ae7f9035e9",
"assets/assets/images/level5one.png": "1eb2a9cad8f85154167f0f6f84b0fc81",
"assets/assets/images/level6one.png": "7d47b07131bdfff47889828a9cadb350",
"assets/assets/images/level6two.png": "9b5eb6c2db0314f52bea3a52dc4fefb7",
"assets/assets/images/logocourse.png": "e627dd1223abc61ee48db2f1b4280c92",
"assets/assets/images/mission.png": "b80a077af7a27fae2a6f6dc101e5c13a",
"assets/assets/images/OurServices.png": "be501afb37d20b04b33abe6b98811595",
"assets/assets/images/qualifications.png": "8a4dbeddd3b52e7c46785f2bc7315568",
"assets/assets/images/service1.png": "bb7c6ecc90dd1d26e5a394b2e413acfd",
"assets/assets/images/service2.png": "22a62d8c1dd395cf95d9ebd4709f06fe",
"assets/assets/images/service3.png": "aef9425b46144bd8d1291b69738a7529",
"assets/assets/images/service4.png": "3cd02410a7b6e7b2f49cdb5635c437be",
"assets/assets/images/submit.png": "6ceb880118a538a7ac076f62a26eb816",
"assets/assets/images/university1.png": "3cc3fc937f39d7b2a30cf4515453e6ad",
"assets/assets/images/university10.png": "d36dc4d1330fd427685f7b82193dbd1e",
"assets/assets/images/university11.png": "c6be4857de31a9512cd28b2451eb3168",
"assets/assets/images/university2.png": "5a4c9da341c3b5d3ce857c06ad07fb0d",
"assets/assets/images/university3.png": "0c407017fc7fd979c2618a5d9d5aefe6",
"assets/assets/images/university4.png": "2861b0435cf82e50c936d0e04111fc6a",
"assets/assets/images/university5.png": "79448cc609d942396ab3a28f9e691b2a",
"assets/assets/images/university6.png": "050af0eead8e2583c90662fac239292e",
"assets/assets/images/university7.png": "01ecfc74ee29f8dc7dc4d0e44012f6cc",
"assets/assets/images/university8.png": "82bdeac77dcc3d9d8d54f0f49b4e7edd",
"assets/assets/images/university9.png": "67da98973112ab5d676a843f5e1ef71f",
"assets/assets/images/why1.png": "96e27a5eeb3edeeab3858b1dc9e79aa5",
"assets/assets/images/why2.png": "b80a077af7a27fae2a6f6dc101e5c13a",
"assets/assets/images/why3.png": "f833b29cae66829dba08c243450d6612",
"assets/assets/images/why4.png": "c83f8a2e4299875344c182faf4ddbf25",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "649fef883655ab814feb78fb3ac138c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efd8b05dcb3b52ba07eda66114c208b7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "55e64077252c8cbe18f967f28e5d3ad1",
"favicon.png": "1f923fb696c12c8a0a44e8dc1cf69660",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c025a72a79560d91456598abfd0b1178",
"/": "c025a72a79560d91456598abfd0b1178",
"main.dart.js": "638971871593247a177bc3326cc1c28e",
"manifest.json": "c3e841dde64984428789dc355f4d39d7",
"version.json": "b0949b1408965930b0a11c4f067ed8b8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
