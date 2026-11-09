/**
 * img.js — single source for remote editorial imagery.
 *
 * Every web image on this site is requested through the workspace image
 * service (no placeholder stock URLs), so prompts are descriptive, art-directed
 * and cached by the browser after first paint.
 */

const BASE = 'https://coresg-normal.trae.ai/api/ide/v1/tool_text_to_image';

/**
 * Build an art-directed image URL.
 * @param {string} prompt  SDXL-style descriptive prompt
 * @param {string} size    square_hd | square | portrait_4_3 | portrait_16_9 | landscape_4_3 | landscape_16_9
 */
export const img = (prompt, size = 'landscape_4_3') =>
  `${BASE}?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

const VALLEY =
  'documentary photograph of Swat Valley in Khyber Pakhtunkhwa Pakistan, terraced emerald fields, glacial river, pine covered Hindu Kush mountains, thin morning mist, golden hour, natural colour grading, editorial photojournalism';

const CAMPUS =
  'modern university campus building in northern Pakistan, pale stone and glass facade, deodar pine trees, mountain ridge behind, overcast soft light, architectural editorial photography, wide angle';

export const IMAGES = {
  heroValley: img(VALLEY, 'portrait_4_3'),

  manifestoPlate: img(
    `${CAMPUS}, empty plaza at dawn, long shadows, muted sage and cream tones`,
    'landscape_16_9'
  ),

  vcPortrait: img(
    'formal editorial portrait of a distinguished Pakistani male academic in his fifties, dark shalwar kameez with waistcoat, short greying beard, calm confident expression, soft studio light against deep pine green backdrop, shallow depth of field, magazine cover quality',
    'square_hd'
  ),

  chancellorPortrait: img(
    'formal editorial portrait of a senior Pakistani statesman in his sixties wearing a dark sherwani, dignified neutral expression, soft window light, deep green backdrop, editorial magazine photography',
    'portrait_4_3'
  ),

  registrarPortrait: img(
    'formal editorial portrait of a Pakistani university registrar in his forties, grey suit and tie, warm approachable expression, library background softly blurred, editorial photography',
    'portrait_4_3'
  ),

  gallery: [
    img(
      'architecture students reviewing blueprints under pine trees on a university campus in Swat Pakistan, afternoon light, candid documentary photograph',
      'portrait_4_3'
    ),
    img(
      'students walking through a colonnaded university corridor in northern Pakistan, repeated arches, warm light, symmetrical composition, editorial photograph',
      'landscape_4_3'
    ),
    img(
      'young Pakistani female student in a hijab presenting research at a university poster session, colleagues listening, natural light, documentary photograph',
      'landscape_4_3'
    ),
    img(
      'university central library reading room, wooden tables, brass lamps, students studying, tall windows with mountain view, warm editorial interior photography',
      'portrait_4_3'
    ),
    img(
      'inter-university cricket and football ground of a Pakistani university with snow capped mountains in the distance, late afternoon, documentary photograph',
      'landscape_16_9'
    ),
    img(
      'science laboratory of a Pakistani university, students pipetting samples, teal and cream colour palette, clean editorial photography',
      'square_hd'
    ),
    img(
      'cultural evening on a university campus in Khyber Pakhtunkhwa, traditional Attan dance, colourful regional dress, stage lights, documentary photograph',
      'landscape_4_3'
    ),
    img(
      'botanical research greenhouse on a mountain university campus, students cataloguing endemic plant species, soft diffused light, editorial photograph',
      'portrait_4_3'
    ),
  ],

  researchPlate: img(
    'researcher in a biotechnology laboratory examining plant tissue cultures, glassware, cool sage green light, scientific editorial photography',
    'landscape_4_3'
  ),

  oricPlate: img(
    'technology incubator space at a Pakistani university, startup team at a whiteboard, laptops, warm ambient light, documentary editorial photograph',
    'landscape_4_3'
  ),

  admissionsPlate: img(
    'students queuing at an admissions help desk of a Pakistani university, notice boards, daylight, documentary editorial photograph',
    'landscape_4_3'
  ),

  campusLifePlate: img(
    'students gathered on the lawn of a mountain university campus at golden hour, notebooks and tea, candid documentary photograph',
    'landscape_16_9'
  ),

  contactPlate: img(
    `${CAMPUS}, main administrative block with flag pole, clear sky, frontal architectural composition`,
    'landscape_16_9'
  ),
};
