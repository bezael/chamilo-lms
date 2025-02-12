import baseService from "./baseService"

/**
 * @param {string} userIri
 * @returns {Promise<Object>}
 */
async function find(userIri) {
  return await baseService.get(userIri)
}

/**
 * @param {Object} searchParams
 * @returns {Promise<{totalItems, items}>}
 */
async function findAll(searchParams) {
  return await baseService.getCollection("/api/users", searchParams)
}

/**
 * @param {string} username
 * @returns {Promise<{totalItems, items}>}
 */
async function findByUsername(username) {
  return await baseService.getCollection("/api/users", { username })
}

/**
 * @param {string} term
 * @returns {Promise<{totalItems, items}>}
 */
async function findBySearchTerm(term) {
  return await baseService.getCollection("/api/users", { search: term })
}

export default {
  find,
  findAll,
  findByUsername,
  findBySearchTerm,
}
