// Run only once to create gamesSeed. if list changes, gamesSeed will break and will need to be updated mannualy

const rawSelection = [
  {
    date_added: '2008-04-01 01:54:05',
    id: 5415,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/177070-brood_war_box_art__starcraft_.jpg',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/177070-brood_war_box_art__starcraft_.jpg',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/177070-brood_war_box_art__starcraft_.jpg',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/177070-brood_war_box_art__starcraft_.jpg',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/177070-brood_war_box_art__starcraft_.jpg',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/177070-brood_war_box_art__starcraft_.jpg',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/177070-brood_war_box_art__starcraft_.jpg',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/177070-brood_war_box_art__starcraft_.jpg',
      original_url:
        'https://www.giantbomb.com/api/image/original/177070-brood_war_box_art__starcraft_.jpg',
      image_tags: 'All Images,Box Art',
    },
    name: 'StarCraft: Brood War',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
    ],
  },
  {
    date_added: '2008-04-01 16:12:49',
    id: 14073,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/474296-tftbox2.jpg',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/474296-tftbox2.jpg',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/474296-tftbox2.jpg',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/474296-tftbox2.jpg',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/474296-tftbox2.jpg',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/474296-tftbox2.jpg',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/474296-tftbox2.jpg',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/474296-tftbox2.jpg',
      original_url:
        'https://www.giantbomb.com/api/image/original/474296-tftbox2.jpg',
      image_tags: 'All Images,Box Art',
    },
    name: 'Warcraft III: The Frozen Throne',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
    ],
  },
  {
    date_added: '2008-04-01 16:38:37',
    id: 18162,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2243884-box_tf2.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2243884-box_tf2.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2243884-box_tf2.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2243884-box_tf2.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2243884-box_tf2.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2243884-box_tf2.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2243884-box_tf2.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2243884-box_tf2.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2243884-box_tf2.png',
      image_tags: 'All Images,Box Art',
    },
    name: 'Team Fortress 2',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-152/',
        id: 152,
        name: 'Linux',
        site_detail_url: 'https://www.giantbomb.com/linux/3045-152/',
        abbreviation: 'LIN',
      },
    ],
  },
  {
    date_added: '2008-04-01 16:51:54',
    id: 20077,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/1293119-battle_chess_box_art.jpg',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/1293119-battle_chess_box_art.jpg',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/1293119-battle_chess_box_art.jpg',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/1293119-battle_chess_box_art.jpg',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/1293119-battle_chess_box_art.jpg',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/1293119-battle_chess_box_art.jpg',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/1293119-battle_chess_box_art.jpg',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/1293119-battle_chess_box_art.jpg',
      original_url:
        'https://www.giantbomb.com/api/image/original/1293119-battle_chess_box_art.jpg',
      image_tags: 'All Images,Box Art',
    },
    name: 'Battle Chess',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-1/',
        id: 1,
        name: 'Amiga',
        site_detail_url: 'https://www.giantbomb.com/amiga/3045-1/',
        abbreviation: 'AMI',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-12/',
        id: 12,
        name: 'Apple II',
        site_detail_url: 'https://www.giantbomb.com/apple-ii/3045-12/',
        abbreviation: 'APL2',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-13/',
        id: 13,
        name: 'Atari ST',
        site_detail_url: 'https://www.giantbomb.com/atari-st/3045-13/',
        abbreviation: 'AST',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-14/',
        id: 14,
        name: 'Commodore 64',
        site_detail_url: 'https://www.giantbomb.com/commodore-64/3045-14/',
        abbreviation: 'C64',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-21/',
        id: 21,
        name: 'Nintendo Entertainment System',
        site_detail_url:
          'https://www.giantbomb.com/nintendo-entertainment-system/3045-21/',
        abbreviation: 'NES',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-26/',
        id: 26,
        name: '3DO',
        site_detail_url: 'https://www.giantbomb.com/3do/3045-26/',
        abbreviation: '3DO',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-38/',
        id: 38,
        name: 'Apple IIgs',
        site_detail_url: 'https://www.giantbomb.com/apple-iigs/3045-38/',
        abbreviation: 'A2GS',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-39/',
        id: 39,
        name: 'Amiga CD32',
        site_detail_url: 'https://www.giantbomb.com/amiga-cd32/3045-39/',
        abbreviation: 'CD32',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-95/',
        id: 95,
        name: 'Sharp X68000',
        site_detail_url: 'https://www.giantbomb.com/sharp-x68000/3045-95/',
        abbreviation: 'X68K',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-108/',
        id: 108,
        name: 'FM Towns',
        site_detail_url: 'https://www.giantbomb.com/fm-towns/3045-108/',
        abbreviation: 'FMT',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-112/',
        id: 112,
        name: 'NEC PC-9801',
        site_detail_url: 'https://www.giantbomb.com/nec-pc-9801/3045-112/',
        abbreviation: 'PC98',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-142/',
        id: 142,
        name: 'Commodore CDTV',
        site_detail_url: 'https://www.giantbomb.com/commodore-cdtv/3045-142/',
        abbreviation: 'CDTV',
      },
    ],
  },
  {
    date_added: '2008-05-25 23:10:37',
    id: 20690,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/1970474-box_l4d.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/1970474-box_l4d.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/1970474-box_l4d.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/1970474-box_l4d.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/1970474-box_l4d.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/1970474-box_l4d.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/1970474-box_l4d.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/1970474-box_l4d.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/1970474-box_l4d.png',
      image_tags: 'All Images,Box Art',
    },
    name: 'Left 4 Dead',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-20/',
        id: 20,
        name: 'Xbox 360',
        site_detail_url: 'https://www.giantbomb.com/xbox-360/3045-20/',
        abbreviation: 'X360',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-86/',
        id: 86,
        name: 'Xbox 360 Games Store',
        site_detail_url:
          'https://www.giantbomb.com/xbox-360-games-store/3045-86/',
        abbreviation: 'XBGS',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
    ],
  },
  {
    date_added: '2008-07-26 20:50:23',
    id: 21662,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/3140541-box_p2.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/3140541-box_p2.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/3140541-box_p2.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/3140541-box_p2.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/3140541-box_p2.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/3140541-box_p2.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/3140541-box_p2.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/3140541-box_p2.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/3140541-box_p2.png',
      image_tags: 'All Images',
    },
    name: 'Portal 2',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-20/',
        id: 20,
        name: 'Xbox 360',
        site_detail_url: 'https://www.giantbomb.com/xbox-360/3045-20/',
        abbreviation: 'X360',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-35/',
        id: 35,
        name: 'PlayStation 3',
        site_detail_url: 'https://www.giantbomb.com/playstation-3/3045-35/',
        abbreviation: 'PS3',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-152/',
        id: 152,
        name: 'Linux',
        site_detail_url: 'https://www.giantbomb.com/linux/3045-152/',
        abbreviation: 'LIN',
      },
    ],
  },
  {
    date_added: '2008-10-07 17:58:22',
    id: 24024,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2115067-box_lol.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2115067-box_lol.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2115067-box_lol.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2115067-box_lol.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2115067-box_lol.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2115067-box_lol.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2115067-box_lol.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2115067-box_lol.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2115067-box_lol.png',
      image_tags: 'All Images,Box Art',
    },
    name: 'League of Legends',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
    ],
  },
  {
    date_added: '2008-10-12 01:04:52',
    id: 24079,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2849274-box_sc2lotv.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2849274-box_sc2lotv.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2849274-box_sc2lotv.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2849274-box_sc2lotv.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2849274-box_sc2lotv.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2849274-box_sc2lotv.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2849274-box_sc2lotv.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2849274-box_sc2lotv.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2849274-box_sc2lotv.png',
      image_tags: 'All Images,Box Art',
    },
    name: 'StarCraft II: Legacy of the Void',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
    ],
  },
  {
    date_added: '2009-06-01 09:53:34',
    id: 26782,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/1970475-box_l4d2.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/1970475-box_l4d2.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/1970475-box_l4d2.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/1970475-box_l4d2.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/1970475-box_l4d2.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/1970475-box_l4d2.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/1970475-box_l4d2.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/1970475-box_l4d2.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/1970475-box_l4d2.png',
      image_tags: 'All Images,Box Art',
    },
    name: 'Left 4 Dead 2',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-20/',
        id: 20,
        name: 'Xbox 360',
        site_detail_url: 'https://www.giantbomb.com/xbox-360/3045-20/',
        abbreviation: 'X360',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-86/',
        id: 86,
        name: 'Xbox 360 Games Store',
        site_detail_url:
          'https://www.giantbomb.com/xbox-360-games-store/3045-86/',
        abbreviation: 'XBGS',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-152/',
        id: 152,
        name: 'Linux',
        site_detail_url: 'https://www.giantbomb.com/linux/3045-152/',
        abbreviation: 'LIN',
      },
    ],
  },
  {
    date_added: '2010-03-22 20:40:30',
    id: 30475,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/3020660-box_mc.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/3020660-box_mc.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/3020660-box_mc.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/3020660-box_mc.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/3020660-box_mc.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/3020660-box_mc.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/3020660-box_mc.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/3020660-box_mc.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/3020660-box_mc.png',
      image_tags: 'All Images',
    },
    name: 'Minecraft',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-20/',
        id: 20,
        name: 'Xbox 360',
        site_detail_url: 'https://www.giantbomb.com/xbox-360/3045-20/',
        abbreviation: 'X360',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-35/',
        id: 35,
        name: 'PlayStation 3',
        site_detail_url: 'https://www.giantbomb.com/playstation-3/3045-35/',
        abbreviation: 'PS3',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-86/',
        id: 86,
        name: 'Xbox 360 Games Store',
        site_detail_url:
          'https://www.giantbomb.com/xbox-360-games-store/3045-86/',
        abbreviation: 'XBGS',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-88/',
        id: 88,
        name: 'PlayStation Network (PS3)',
        site_detail_url:
          'https://www.giantbomb.com/playstation-network-ps3/3045-88/',
        abbreviation: 'PS3N',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-96/',
        id: 96,
        name: 'iPhone',
        site_detail_url: 'https://www.giantbomb.com/iphone/3045-96/',
        abbreviation: 'IPHN',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-121/',
        id: 121,
        name: 'iPad',
        site_detail_url: 'https://www.giantbomb.com/ipad/3045-121/',
        abbreviation: 'IPAD',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-123/',
        id: 123,
        name: 'Android',
        site_detail_url: 'https://www.giantbomb.com/android/3045-123/',
        abbreviation: 'ANDR',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-124/',
        id: 124,
        name: 'Windows Phone',
        site_detail_url: 'https://www.giantbomb.com/windows-phone/3045-124/',
        abbreviation: 'WP',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-129/',
        id: 129,
        name: 'PlayStation Vita',
        site_detail_url: 'https://www.giantbomb.com/playstation-vita/3045-129/',
        abbreviation: 'VITA',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-139/',
        id: 139,
        name: 'Wii U',
        site_detail_url: 'https://www.giantbomb.com/wii-u/3045-139/',
        abbreviation: 'WiiU',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-140/',
        id: 140,
        name: 'Browser',
        site_detail_url: 'https://www.giantbomb.com/browser/3045-140/',
        abbreviation: 'BROW',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-143/',
        id: 143,
        name: 'PlayStation Network (Vita)',
        site_detail_url:
          'https://www.giantbomb.com/playstation-network-vita/3045-143/',
        abbreviation: 'PSNV',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-145/',
        id: 145,
        name: 'Xbox One',
        site_detail_url: 'https://www.giantbomb.com/xbox-one/3045-145/',
        abbreviation: 'XONE',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-146/',
        id: 146,
        name: 'PlayStation 4',
        site_detail_url: 'https://www.giantbomb.com/playstation-4/3045-146/',
        abbreviation: 'PS4',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-152/',
        id: 152,
        name: 'Linux',
        site_detail_url: 'https://www.giantbomb.com/linux/3045-152/',
        abbreviation: 'LIN',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-155/',
        id: 155,
        name: 'Amazon Fire TV',
        site_detail_url: 'https://www.giantbomb.com/amazon-fire-tv/3045-155/',
        abbreviation: 'FIRE',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-156/',
        id: 156,
        name: 'New Nintendo 3DS',
        site_detail_url: 'https://www.giantbomb.com/new-nintendo-3ds/3045-156/',
        abbreviation: 'N3DS',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-157/',
        id: 157,
        name: 'Nintendo Switch',
        site_detail_url: 'https://www.giantbomb.com/nintendo-switch/3045-157/',
        abbreviation: 'NSW',
      },
    ],
  },
  {
    date_added: '2010-10-13 10:38:24',
    id: 32887,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2993179-box_dota2.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2993179-box_dota2.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2993179-box_dota2.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2993179-box_dota2.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2993179-box_dota2.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2993179-box_dota2.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2993179-box_dota2.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2993179-box_dota2.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2993179-box_dota2.png',
      image_tags: 'All Images',
    },
    name: 'Dota 2',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-152/',
        id: 152,
        name: 'Linux',
        site_detail_url: 'https://www.giantbomb.com/linux/3045-152/',
        abbreviation: 'LIN',
      },
    ],
  },
  {
    date_added: '2011-04-28 12:42:21',
    id: 34940,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2994875-box_terr.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2994875-box_terr.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2994875-box_terr.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2994875-box_terr.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2994875-box_terr.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2994875-box_terr.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2994875-box_terr.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2994875-box_terr.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2994875-box_terr.png',
      image_tags: 'All Images',
    },
    name: 'Terraria',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-20/',
        id: 20,
        name: 'Xbox 360',
        site_detail_url: 'https://www.giantbomb.com/xbox-360/3045-20/',
        abbreviation: 'X360',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-35/',
        id: 35,
        name: 'PlayStation 3',
        site_detail_url: 'https://www.giantbomb.com/playstation-3/3045-35/',
        abbreviation: 'PS3',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-86/',
        id: 86,
        name: 'Xbox 360 Games Store',
        site_detail_url:
          'https://www.giantbomb.com/xbox-360-games-store/3045-86/',
        abbreviation: 'XBGS',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-88/',
        id: 88,
        name: 'PlayStation Network (PS3)',
        site_detail_url:
          'https://www.giantbomb.com/playstation-network-ps3/3045-88/',
        abbreviation: 'PS3N',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-96/',
        id: 96,
        name: 'iPhone',
        site_detail_url: 'https://www.giantbomb.com/iphone/3045-96/',
        abbreviation: 'IPHN',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-117/',
        id: 117,
        name: 'Nintendo 3DS',
        site_detail_url: 'https://www.giantbomb.com/nintendo-3ds/3045-117/',
        abbreviation: '3DS',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-121/',
        id: 121,
        name: 'iPad',
        site_detail_url: 'https://www.giantbomb.com/ipad/3045-121/',
        abbreviation: 'IPAD',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-123/',
        id: 123,
        name: 'Android',
        site_detail_url: 'https://www.giantbomb.com/android/3045-123/',
        abbreviation: 'ANDR',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-124/',
        id: 124,
        name: 'Windows Phone',
        site_detail_url: 'https://www.giantbomb.com/windows-phone/3045-124/',
        abbreviation: 'WP',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-129/',
        id: 129,
        name: 'PlayStation Vita',
        site_detail_url: 'https://www.giantbomb.com/playstation-vita/3045-129/',
        abbreviation: 'VITA',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-138/',
        id: 138,
        name: 'Nintendo 3DS eShop',
        site_detail_url:
          'https://www.giantbomb.com/nintendo-3ds-eshop/3045-138/',
        abbreviation: '3DSE',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-139/',
        id: 139,
        name: 'Wii U',
        site_detail_url: 'https://www.giantbomb.com/wii-u/3045-139/',
        abbreviation: 'WiiU',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-143/',
        id: 143,
        name: 'PlayStation Network (Vita)',
        site_detail_url:
          'https://www.giantbomb.com/playstation-network-vita/3045-143/',
        abbreviation: 'PSNV',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-145/',
        id: 145,
        name: 'Xbox One',
        site_detail_url: 'https://www.giantbomb.com/xbox-one/3045-145/',
        abbreviation: 'XONE',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-146/',
        id: 146,
        name: 'PlayStation 4',
        site_detail_url: 'https://www.giantbomb.com/playstation-4/3045-146/',
        abbreviation: 'PS4',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-152/',
        id: 152,
        name: 'Linux',
        site_detail_url: 'https://www.giantbomb.com/linux/3045-152/',
        abbreviation: 'LIN',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-157/',
        id: 157,
        name: 'Nintendo Switch',
        site_detail_url: 'https://www.giantbomb.com/nintendo-switch/3045-157/',
        abbreviation: 'NSW',
      },
    ],
  },
  {
    date_added: '2011-08-12 10:09:04',
    id: 36113,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2302957-i2cs9uzmq4yua.jpg',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2302957-i2cs9uzmq4yua.jpg',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2302957-i2cs9uzmq4yua.jpg',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2302957-i2cs9uzmq4yua.jpg',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2302957-i2cs9uzmq4yua.jpg',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2302957-i2cs9uzmq4yua.jpg',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2302957-i2cs9uzmq4yua.jpg',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2302957-i2cs9uzmq4yua.jpg',
      original_url:
        'https://www.giantbomb.com/api/image/original/2302957-i2cs9uzmq4yua.jpg',
      image_tags: 'All Images,Box Art',
    },
    name: 'Counter-Strike: Global Offensive',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-86/',
        id: 86,
        name: 'Xbox 360 Games Store',
        site_detail_url:
          'https://www.giantbomb.com/xbox-360-games-store/3045-86/',
        abbreviation: 'XBGS',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-88/',
        id: 88,
        name: 'PlayStation Network (PS3)',
        site_detail_url:
          'https://www.giantbomb.com/playstation-network-ps3/3045-88/',
        abbreviation: 'PS3N',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-152/',
        id: 152,
        name: 'Linux',
        site_detail_url: 'https://www.giantbomb.com/linux/3045-152/',
        abbreviation: 'LIN',
      },
    ],
  },
  {
    date_added: '2011-10-21 18:51:00',
    id: 36739,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2849273-box_hots.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2849273-box_hots.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2849273-box_hots.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2849273-box_hots.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2849273-box_hots.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2849273-box_hots.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2849273-box_hots.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2849273-box_hots.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2849273-box_hots.png',
      image_tags: 'All Images',
    },
    name: 'Heroes of the Storm',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
    ],
  },
  {
    date_added: '2011-12-10 18:36:15',
    id: 37030,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2952214-box_fn.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2952214-box_fn.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2952214-box_fn.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2952214-box_fn.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2952214-box_fn.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2952214-box_fn.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2952214-box_fn.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2952214-box_fn.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2952214-box_fn.png',
      image_tags: 'All Images',
    },
    name: 'Fortnite',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-96/',
        id: 96,
        name: 'iPhone',
        site_detail_url: 'https://www.giantbomb.com/iphone/3045-96/',
        abbreviation: 'IPHN',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-121/',
        id: 121,
        name: 'iPad',
        site_detail_url: 'https://www.giantbomb.com/ipad/3045-121/',
        abbreviation: 'IPAD',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-123/',
        id: 123,
        name: 'Android',
        site_detail_url: 'https://www.giantbomb.com/android/3045-123/',
        abbreviation: 'ANDR',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-145/',
        id: 145,
        name: 'Xbox One',
        site_detail_url: 'https://www.giantbomb.com/xbox-one/3045-145/',
        abbreviation: 'XONE',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-146/',
        id: 146,
        name: 'PlayStation 4',
        site_detail_url: 'https://www.giantbomb.com/playstation-4/3045-146/',
        abbreviation: 'PS4',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-157/',
        id: 157,
        name: 'Nintendo Switch',
        site_detail_url: 'https://www.giantbomb.com/nintendo-switch/3045-157/',
        abbreviation: 'NSW',
      },
    ],
  },
  {
    date_added: '2013-03-22 07:29:01',
    id: 42033,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2907825-2849272-box_hearthstone.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2907825-2849272-box_hearthstone.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2907825-2849272-box_hearthstone.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2907825-2849272-box_hearthstone.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2907825-2849272-box_hearthstone.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2907825-2849272-box_hearthstone.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2907825-2849272-box_hearthstone.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2907825-2849272-box_hearthstone.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2907825-2849272-box_hearthstone.png',
      image_tags: 'All Images',
    },
    name: 'Hearthstone',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-96/',
        id: 96,
        name: 'iPhone',
        site_detail_url: 'https://www.giantbomb.com/iphone/3045-96/',
        abbreviation: 'IPHN',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-121/',
        id: 121,
        name: 'iPad',
        site_detail_url: 'https://www.giantbomb.com/ipad/3045-121/',
        abbreviation: 'IPAD',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-123/',
        id: 123,
        name: 'Android',
        site_detail_url: 'https://www.giantbomb.com/android/3045-123/',
        abbreviation: 'ANDR',
      },
    ],
  },
  {
    date_added: '2013-08-21 05:27:41',
    id: 43649,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2582053-box_d3ros.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2582053-box_d3ros.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2582053-box_d3ros.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2582053-box_d3ros.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2582053-box_d3ros.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2582053-box_d3ros.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2582053-box_d3ros.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2582053-box_d3ros.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2582053-box_d3ros.png',
      image_tags: 'All Images,Box Art',
    },
    name: 'Diablo III: Reaper of Souls',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-20/',
        id: 20,
        name: 'Xbox 360',
        site_detail_url: 'https://www.giantbomb.com/xbox-360/3045-20/',
        abbreviation: 'X360',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-35/',
        id: 35,
        name: 'PlayStation 3',
        site_detail_url: 'https://www.giantbomb.com/playstation-3/3045-35/',
        abbreviation: 'PS3',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
    ],
  },
  {
    date_added: '2014-05-13 19:24:10',
    id: 46300,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2676025-diablo%20iii%20-%20ultimate%20evil%20edition%20v4.jpg',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2676025-diablo%20iii%20-%20ultimate%20evil%20edition%20v4.jpg',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2676025-diablo%20iii%20-%20ultimate%20evil%20edition%20v4.jpg',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2676025-diablo%20iii%20-%20ultimate%20evil%20edition%20v4.jpg',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2676025-diablo%20iii%20-%20ultimate%20evil%20edition%20v4.jpg',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2676025-diablo%20iii%20-%20ultimate%20evil%20edition%20v4.jpg',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2676025-diablo%20iii%20-%20ultimate%20evil%20edition%20v4.jpg',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2676025-diablo%20iii%20-%20ultimate%20evil%20edition%20v4.jpg',
      original_url:
        'https://www.giantbomb.com/api/image/original/2676025-diablo%20iii%20-%20ultimate%20evil%20edition%20v4.jpg',
      image_tags: 'All Images',
    },
    name: 'Diablo III: Ultimate Evil Edition',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-20/',
        id: 20,
        name: 'Xbox 360',
        site_detail_url: 'https://www.giantbomb.com/xbox-360/3045-20/',
        abbreviation: 'X360',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-35/',
        id: 35,
        name: 'PlayStation 3',
        site_detail_url: 'https://www.giantbomb.com/playstation-3/3045-35/',
        abbreviation: 'PS3',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-145/',
        id: 145,
        name: 'Xbox One',
        site_detail_url: 'https://www.giantbomb.com/xbox-one/3045-145/',
        abbreviation: 'XONE',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-146/',
        id: 146,
        name: 'PlayStation 4',
        site_detail_url: 'https://www.giantbomb.com/playstation-4/3045-146/',
        abbreviation: 'PS4',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-157/',
        id: 157,
        name: 'Nintendo Switch',
        site_detail_url: 'https://www.giantbomb.com/nintendo-switch/3045-157/',
        abbreviation: 'NSW',
      },
    ],
  },
  {
    date_added: '2014-11-07 12:10:07',
    id: 48190,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2852990-overwatch.jpg',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2852990-overwatch.jpg',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2852990-overwatch.jpg',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2852990-overwatch.jpg',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2852990-overwatch.jpg',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2852990-overwatch.jpg',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2852990-overwatch.jpg',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2852990-overwatch.jpg',
      original_url:
        'https://www.giantbomb.com/api/image/original/2852990-overwatch.jpg',
      image_tags: 'All Images,Box Art',
    },
    name: 'Overwatch',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-145/',
        id: 145,
        name: 'Xbox One',
        site_detail_url: 'https://www.giantbomb.com/xbox-one/3045-145/',
        abbreviation: 'XONE',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-146/',
        id: 146,
        name: 'PlayStation 4',
        site_detail_url: 'https://www.giantbomb.com/playstation-4/3045-146/',
        abbreviation: 'PS4',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-157/',
        id: 157,
        name: 'Nintendo Switch',
        site_detail_url: 'https://www.giantbomb.com/nintendo-switch/3045-157/',
        abbreviation: 'NSW',
      },
    ],
  },
  {
    date_added: '2014-12-18 07:27:16',
    id: 48413,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2948336-box_mcsm.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2948336-box_mcsm.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2948336-box_mcsm.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2948336-box_mcsm.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2948336-box_mcsm.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2948336-box_mcsm.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2948336-box_mcsm.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2948336-box_mcsm.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2948336-box_mcsm.png',
      image_tags: 'All Images',
    },
    name: 'Minecraft: Story Mode',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-20/',
        id: 20,
        name: 'Xbox 360',
        site_detail_url: 'https://www.giantbomb.com/xbox-360/3045-20/',
        abbreviation: 'X360',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-35/',
        id: 35,
        name: 'PlayStation 3',
        site_detail_url: 'https://www.giantbomb.com/playstation-3/3045-35/',
        abbreviation: 'PS3',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-86/',
        id: 86,
        name: 'Xbox 360 Games Store',
        site_detail_url:
          'https://www.giantbomb.com/xbox-360-games-store/3045-86/',
        abbreviation: 'XBGS',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-88/',
        id: 88,
        name: 'PlayStation Network (PS3)',
        site_detail_url:
          'https://www.giantbomb.com/playstation-network-ps3/3045-88/',
        abbreviation: 'PS3N',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-96/',
        id: 96,
        name: 'iPhone',
        site_detail_url: 'https://www.giantbomb.com/iphone/3045-96/',
        abbreviation: 'IPHN',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-121/',
        id: 121,
        name: 'iPad',
        site_detail_url: 'https://www.giantbomb.com/ipad/3045-121/',
        abbreviation: 'IPAD',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-123/',
        id: 123,
        name: 'Android',
        site_detail_url: 'https://www.giantbomb.com/android/3045-123/',
        abbreviation: 'ANDR',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-139/',
        id: 139,
        name: 'Wii U',
        site_detail_url: 'https://www.giantbomb.com/wii-u/3045-139/',
        abbreviation: 'WiiU',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-145/',
        id: 145,
        name: 'Xbox One',
        site_detail_url: 'https://www.giantbomb.com/xbox-one/3045-145/',
        abbreviation: 'XONE',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-146/',
        id: 146,
        name: 'PlayStation 4',
        site_detail_url: 'https://www.giantbomb.com/playstation-4/3045-146/',
        abbreviation: 'PS4',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-157/',
        id: 157,
        name: 'Nintendo Switch',
        site_detail_url: 'https://www.giantbomb.com/nintendo-switch/3045-157/',
        abbreviation: 'NSW',
      },
    ],
  },
  {
    date_added: '2015-02-16 15:13:30',
    id: 48857,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2727386-10955087_326593160862698_6829903731160196022_o.jpg',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2727386-10955087_326593160862698_6829903731160196022_o.jpg',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2727386-10955087_326593160862698_6829903731160196022_o.jpg',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2727386-10955087_326593160862698_6829903731160196022_o.jpg',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2727386-10955087_326593160862698_6829903731160196022_o.jpg',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2727386-10955087_326593160862698_6829903731160196022_o.jpg',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2727386-10955087_326593160862698_6829903731160196022_o.jpg',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2727386-10955087_326593160862698_6829903731160196022_o.jpg',
      original_url:
        'https://www.giantbomb.com/api/image/original/2727386-10955087_326593160862698_6829903731160196022_o.jpg',
      image_tags: 'All Images',
    },
    name: 'Terraria: Otherworld',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
    ],
  },
  {
    date_added: '2016-02-18 17:00:35',
    id: 52693,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2998211-box_dbd.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2998211-box_dbd.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2998211-box_dbd.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2998211-box_dbd.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2998211-box_dbd.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2998211-box_dbd.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2998211-box_dbd.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2998211-box_dbd.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2998211-box_dbd.png',
      image_tags: 'All Images',
    },
    name: 'Dead by Daylight',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-96/',
        id: 96,
        name: 'iPhone',
        site_detail_url: 'https://www.giantbomb.com/iphone/3045-96/',
        abbreviation: 'IPHN',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-121/',
        id: 121,
        name: 'iPad',
        site_detail_url: 'https://www.giantbomb.com/ipad/3045-121/',
        abbreviation: 'IPAD',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-123/',
        id: 123,
        name: 'Android',
        site_detail_url: 'https://www.giantbomb.com/android/3045-123/',
        abbreviation: 'ANDR',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-145/',
        id: 145,
        name: 'Xbox One',
        site_detail_url: 'https://www.giantbomb.com/xbox-one/3045-145/',
        abbreviation: 'XONE',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-146/',
        id: 146,
        name: 'PlayStation 4',
        site_detail_url: 'https://www.giantbomb.com/playstation-4/3045-146/',
        abbreviation: 'PS4',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-157/',
        id: 157,
        name: 'Nintendo Switch',
        site_detail_url: 'https://www.giantbomb.com/nintendo-switch/3045-157/',
        abbreviation: 'NSW',
      },
    ],
  },
  {
    date_added: '2017-06-07 15:40:03',
    id: 59826,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2951042-box_mcsms2.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2951042-box_mcsms2.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2951042-box_mcsms2.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2951042-box_mcsms2.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2951042-box_mcsms2.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2951042-box_mcsms2.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2951042-box_mcsms2.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2951042-box_mcsms2.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2951042-box_mcsms2.png',
      image_tags: 'All Images',
    },
    name: 'Minecraft: Story Mode - Season 2',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-20/',
        id: 20,
        name: 'Xbox 360',
        site_detail_url: 'https://www.giantbomb.com/xbox-360/3045-20/',
        abbreviation: 'X360',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-86/',
        id: 86,
        name: 'Xbox 360 Games Store',
        site_detail_url:
          'https://www.giantbomb.com/xbox-360-games-store/3045-86/',
        abbreviation: 'XBGS',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-96/',
        id: 96,
        name: 'iPhone',
        site_detail_url: 'https://www.giantbomb.com/iphone/3045-96/',
        abbreviation: 'IPHN',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-123/',
        id: 123,
        name: 'Android',
        site_detail_url: 'https://www.giantbomb.com/android/3045-123/',
        abbreviation: 'ANDR',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-145/',
        id: 145,
        name: 'Xbox One',
        site_detail_url: 'https://www.giantbomb.com/xbox-one/3045-145/',
        abbreviation: 'XONE',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-146/',
        id: 146,
        name: 'PlayStation 4',
        site_detail_url: 'https://www.giantbomb.com/playstation-4/3045-146/',
        abbreviation: 'PS4',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-157/',
        id: 157,
        name: 'Nintendo Switch',
        site_detail_url: 'https://www.giantbomb.com/nintendo-switch/3045-157/',
        abbreviation: 'NSW',
      },
    ],
  },
  {
    date_added: '2017-08-08 18:26:52',
    id: 60758,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/2956322-screen%20shot%202017-08-08%20at%209.27.06%20pm.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/2956322-screen%20shot%202017-08-08%20at%209.27.06%20pm.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/2956322-screen%20shot%202017-08-08%20at%209.27.06%20pm.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/2956322-screen%20shot%202017-08-08%20at%209.27.06%20pm.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/2956322-screen%20shot%202017-08-08%20at%209.27.06%20pm.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/2956322-screen%20shot%202017-08-08%20at%209.27.06%20pm.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/2956322-screen%20shot%202017-08-08%20at%209.27.06%20pm.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/2956322-screen%20shot%202017-08-08%20at%209.27.06%20pm.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/2956322-screen%20shot%202017-08-08%20at%209.27.06%20pm.png',
      image_tags: 'All Images',
    },
    name: 'Artifact',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
    ],
  },
  {
    date_added: '2018-09-29 12:14:31',
    id: 70421,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/3106697-box_md.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/3106697-box_md.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/3106697-box_md.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/3106697-box_md.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/3106697-box_md.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/3106697-box_md.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/3106697-box_md.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/3106697-box_md.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/3106697-box_md.png',
      image_tags: 'All Images',
    },
    name: 'Minecraft: Dungeons',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-145/',
        id: 145,
        name: 'Xbox One',
        site_detail_url: 'https://www.giantbomb.com/xbox-one/3045-145/',
        abbreviation: 'XONE',
      },
    ],
  },
  {
    date_added: '2018-11-02 14:43:25',
    id: 70844,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/3060587-9646195937-X9kfG.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/3060587-9646195937-X9kfG.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/3060587-9646195937-X9kfG.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/3060587-9646195937-X9kfG.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/3060587-9646195937-X9kfG.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/3060587-9646195937-X9kfG.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/3060587-9646195937-X9kfG.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/3060587-9646195937-X9kfG.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/3060587-9646195937-X9kfG.png',
      image_tags: 'All Images',
    },
    name: 'Warcraft III: Reforged',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
    ],
  },
  {
    date_added: '2019-05-17 20:02:01',
    id: 73461,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/3101538-box_mce.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/3101538-box_mce.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/3101538-box_mce.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/3101538-box_mce.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/3101538-box_mce.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/3101538-box_mce.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/3101538-box_mce.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/3101538-box_mce.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/3101538-box_mce.png',
      image_tags: 'All Images',
    },
    name: 'Dota Underlords',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-96/',
        id: 96,
        name: 'iPhone',
        site_detail_url: 'https://www.giantbomb.com/iphone/3045-96/',
        abbreviation: 'IPHN',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-123/',
        id: 123,
        name: 'Android',
        site_detail_url: 'https://www.giantbomb.com/android/3045-123/',
        abbreviation: 'ANDR',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-152/',
        id: 152,
        name: 'Linux',
        site_detail_url: 'https://www.giantbomb.com/linux/3045-152/',
        abbreviation: 'LIN',
      },
    ],
  },
  {
    date_added: '2019-10-18 11:13:46',
    id: 75725,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/3026329-gb_default-16_9.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/3026329-gb_default-16_9.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/3026329-gb_default-16_9.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/3026329-gb_default-16_9.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/3026329-gb_default-16_9.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/3026329-gb_default-16_9.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/3026329-gb_default-16_9.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/3026329-gb_default-16_9.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/3026329-gb_default-16_9.png',
      image_tags: 'All Images',
    },
    name: 'Teamfight Tactics',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-96/',
        id: 96,
        name: 'iPhone',
        site_detail_url: 'https://www.giantbomb.com/iphone/3045-96/',
        abbreviation: 'IPHN',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-123/',
        id: 123,
        name: 'Android',
        site_detail_url: 'https://www.giantbomb.com/android/3045-123/',
        abbreviation: 'ANDR',
      },
    ],
  },
  {
    date_added: '2019-11-01 12:53:22',
    id: 75882,
    image: {
      icon_url:
        'https://www.giantbomb.com/api/image/square_avatar/3026329-gb_default-16_9.png',
      medium_url:
        'https://www.giantbomb.com/api/image/scale_medium/3026329-gb_default-16_9.png',
      screen_url:
        'https://www.giantbomb.com/api/image/screen_medium/3026329-gb_default-16_9.png',
      screen_large_url:
        'https://www.giantbomb.com/api/image/screen_kubrick/3026329-gb_default-16_9.png',
      small_url:
        'https://www.giantbomb.com/api/image/scale_small/3026329-gb_default-16_9.png',
      super_url:
        'https://www.giantbomb.com/api/image/scale_large/3026329-gb_default-16_9.png',
      thumb_url:
        'https://www.giantbomb.com/api/image/scale_avatar/3026329-gb_default-16_9.png',
      tiny_url:
        'https://www.giantbomb.com/api/image/square_mini/3026329-gb_default-16_9.png',
      original_url:
        'https://www.giantbomb.com/api/image/original/3026329-gb_default-16_9.png',
      image_tags: 'All Images',
    },
    name: 'World of Warcraft: Shadowlands',
    platforms: [
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-17/',
        id: 17,
        name: 'Mac',
        site_detail_url: 'https://www.giantbomb.com/mac/3045-17/',
        abbreviation: 'MAC',
      },
      {
        api_detail_url: 'https://www.giantbomb.com/api/platform/3045-94/',
        id: 94,
        name: 'PC',
        site_detail_url: 'https://www.giantbomb.com/pc/3045-94/',
        abbreviation: 'PC',
      },
    ],
  },
];

const filterResults = (seed) => {
  const lala = seed.map((Obj) => {
    const { name, platforms, id, image } = Obj;

    const filteredPlatforms = platforms
      .filter((platform) => {
        return (
          platform.id === 145 ||
          platform.id === 146 ||
          platform.id === 94 ||
          platform.id === 157
        );
      })
      .map((platform) => {
        const { name, id } = platform;
        return { id, name };
      });
    const { medium_url } = image;
    const img_url = medium_url;
    return { id, name, platforms: filteredPlatforms, img_url };
  });
  return JSON.stringify(lala);
};

// consider passing it directly to seed

const fs = require('fs')
const createSeedObjFile = () => {
    const obj = filterResults(rawSelection)
    fs.writeFileSync('./gamesSeed.js', obj);
}
createSeedObjFile();