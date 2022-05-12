"use strict";
/**
 * {
 *  "email 1": {
 *          "nom": "nom de l'entreprise",
 *          "score global": "Score arrondi",
 *          "dimensions": {
 *              "CX": {
 *                  "moyenne": "Moyenne CX",
 *                  "criteres": {
 *                      "CX1": { "reponse": "valeur de la reponse" }
 *                  }
 *              }
 *           }
 *      }
 * }
 *
 */

class MaturityRadar {
  constructor() {}

  getConfig() {
    // Préparer les datasets
    // {label: Nom d'entreprise, data: [moyenne dim1, moyenne dim2, ...]}
    // Préparer les labels du Radar
    // [1. CX, 2. PI, 3. ST, ...]
  }
}
