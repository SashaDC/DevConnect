/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {

  return knex.schema.createTable('posts', (table) => {

    // table.increments('userId').primary()  - need to add once this has been added to code

    table.string('title', 255).notNullable()
    table.text('content').notNullable()
    table.string('mediaType', 20)
    table.string('mediaURL', 255)
    table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());

   

  })
}

export async function down(knex) {
  return knex.schema.dropTable('posts')
}
