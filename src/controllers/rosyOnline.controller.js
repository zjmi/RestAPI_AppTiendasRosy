import { rosyOnline } from "../database/rosyOnline";
import Sequelize from "sequelize";
import { paginatedResults } from "../middlewares/paginatedResults";
import cons from "consolidate";

export async function getRopaDama(req, res) {
  try {
    const getRopaDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 15 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 15 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 15 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaDama = await rosyOnline.query(getRopaDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, ropaDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getBlusasDama(req, res) {
  try {
    const getBlusasDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 24 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 24 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 24 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const blusasDama = await rosyOnline.query(getBlusasDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, blusasDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getChaquetasDama(req, res) {
  try {
    const getChaquetasDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 490 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 490 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 490 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const chaquetasDama = await rosyOnline.query(getChaquetasDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, chaquetasDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRopaInterioDama(req, res) {
  try {
    const getRopaInterioDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 19 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 19 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 19 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaInterioDama = await rosyOnline.query(getRopaInterioDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, ropaInterioDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getFaldasDama(req, res) {
  try {
    const getFaldasDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 20 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 20 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 20 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const faldasDama = await rosyOnline.query(getFaldasDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, faldasDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getShortsDama(req, res) {
  try {
    const getShortsDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 21 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 21 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 21 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const shortsDama = await rosyOnline.query(getShortsDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, shortsDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getJumpersDama(req, res) {
  try {
    const getJumpersDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 134 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 134 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 134 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const jumpersDama = await rosyOnline.query(getJumpersDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, jumpersDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getJeansDama(req, res) {
  try {
    const getJeansDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 23 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 23 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 23 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const jeansDama = await rosyOnline.query(getJeansDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, jeansDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPantalonesTelaDama(req, res) {
  try {
    const getPantalonesTelaDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 22 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 22 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 22 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const pantalonesTelaDama = await rosyOnline.query(
      getPantalonesTelaDamaQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        pantalonesTelaDama
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getLegginsDama(req, res) {
  try {
    const getLegginsDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1131 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1131 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1131 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const legginsDama = await rosyOnline.query(getLegginsDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, legginsDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getVestidosDama(req, res) {
  try {
    const getVestidosDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 129 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 129 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 129 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const vestidosDama = await rosyOnline.query(getVestidosDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, vestidosDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getVestidosNocheDama(req, res) {
  try {
    const getVestidosNocheDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 26 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 26 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 26 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const vestidosNocheDama = await rosyOnline.query(
      getVestidosNocheDamaQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        vestidosNocheDama
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getVestidosNoviaDama(req, res) {
  try {
    const getVestidosNoviaDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 752 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 752 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 752 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const vestidosNoviaDama = await rosyOnline.query(
      getVestidosNoviaDamaQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        vestidosNoviaDama
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPijamasDama(req, res) {
  try {
    const getPijamasDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 995 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 995 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 995 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const pijamasDama = await rosyOnline.query(getPijamasDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, pijamasDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCarterasDama(req, res) {
  try {
    const getCarterasDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 791 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 791 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 791 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const carterasDama = await rosyOnline.query(getCarterasDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, carterasDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getTrajeBanioDama(req, res) {
  try {
    const getTrajeBanioDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 970 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 970 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 970 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const trajeBanioDama = await rosyOnline.query(getTrajeBanioDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, trajeBanioDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getTallasEspecialesDama(req, res) {
  try {
    const getTallasEspecialesDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 607 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 607 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 607 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const tallasEspecialesDama = await rosyOnline.query(
      getTallasEspecialesDamaQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        tallasEspecialesDama
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRopaDeportivaDama(req, res) {
  try {
    const getRopaDeportivaDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 25 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 25 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 25 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaDeportivaDama = await rosyOnline.query(
      getRopaDeportivaDamaQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        ropaDeportivaDama
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRopaInviernoDama(req, res) {
  try {
    const getRopaInviernoDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 928 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 928 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 928 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaInviernoDama = await rosyOnline.query(getRopaInviernoDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, ropaInviernoDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRopaHospitalDama(req, res) {
  try {
    const getRopaHospitalDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 969 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 969 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 969 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaHospitalDama = await rosyOnline.query(getRopaHospitalDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, ropaHospitalDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRopaCaballero(req, res) {
  try {
    const getRopaCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 27 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 27 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 27 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaCaballero = await rosyOnline.query(getRopaCaballeroQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, ropaCaballero),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCamisasCaballero(req, res) {
  try {
    const getCamisasCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 34 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 34 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 34 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const camisasCaballero = await rosyOnline.query(getCamisasCaballeroQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, camisasCaballero),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCamisasFutbolCaballero(req, res) {
  try {
    const getCamisasFutbolCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1395 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1395 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1395 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const camisasFutbolCaballero = await rosyOnline.query(
      getCamisasFutbolCaballeroQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        camisasFutbolCaballero
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getChaquetasCaballero(req, res) {
  try {
    const getChaquetasCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 753 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 753 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 753 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const chaquetasCaballero = await rosyOnline.query(
      getChaquetasCaballeroQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        chaquetasCaballero
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getSacosVestirCaballero(req, res) {
  try {
    const getSacosVestirCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 31 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 31 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 31 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const sacosVestirCaballero = await rosyOnline.query(
      getSacosVestirCaballeroQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        sacosVestirCaballero
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getBoxersCaballero(req, res) {
  try {
    const getBoxersCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 28 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 28 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 28 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const boxersCaballero = await rosyOnline.query(getBoxersCaballeroQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, boxersCaballero),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getShortsCaballero(req, res) {
  try {
    const getShortsCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 32 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 32 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 32 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const shortsCaballero = await rosyOnline.query(getShortsCaballeroQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, shortsCaballero),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getJeansCaballero(req, res) {
  try {
    const getJeansCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 35 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 35 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 35 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const jeansCaballero = await rosyOnline.query(getJeansCaballeroQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, jeansCaballero),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPantalonesTelaCaballero(req, res) {
  try {
    const getPantalonesTelaCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 33 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 33 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 33 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const pantalonesTelaCaballero = await rosyOnline.query(
      getPantalonesTelaCaballeroQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        pantalonesTelaCaballero
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPijamasCaballero(req, res) {
  try {
    const getPijamasCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 994 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 994 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 994 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const pijamasCaballero = await rosyOnline.query(getPijamasCaballeroQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, pijamasCaballero),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getTallasEspecialesCaballero(req, res) {
  try {
    const getTallasEspecialesCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 608 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 608 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 608 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const tallasEspecialesCaballero = await rosyOnline.query(
      getTallasEspecialesCaballeroQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        tallasEspecialesCaballero
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRopaDeportivaCaballero(req, res) {
  try {
    const getRopaDeportivaCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 30 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 30 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 30 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaDeportivaCaballero = await rosyOnline.query(
      getRopaDeportivaCaballeroQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        ropaDeportivaCaballero
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRopaInviernoCaballero(req, res) {
  try {
    const getRopaInviernoCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 927 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 927 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 927 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaInviernoCaballero = await rosyOnline.query(
      getRopaInviernoCaballeroQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        ropaInviernoCaballero
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCorbatasCaballero(req, res) {
  try {
    const getCorbatasCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1450 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1450 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1450 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const corbatasCaballero = await rosyOnline.query(
      getCorbatasCaballeroQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        corbatasCaballero
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRopaNino(req, res) {
  try {
    const getRopaNinoQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 42 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 42 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 42 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaNino = await rosyOnline.query(getRopaNinoQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, ropaNino),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCamisasNino(req, res) {
  try {
    const getCamisasNinoQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 46 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 46 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 46 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const camisasNino = await rosyOnline.query(getCamisasNinoQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, camisasNino),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getMamelucosNino(req, res) {
  try {
    const getMamelucosNinoQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 757 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 757 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 757 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const mamelucosNino = await rosyOnline.query(getMamelucosNinoQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, mamelucosNino),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getShortsNino(req, res) {
  try {
    const getShortsNinoQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 45 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 45 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 45 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const shortsNino = await rosyOnline.query(getShortsNinoQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, shortsNino),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getJeansNino(req, res) {
  try {
    const getJeansNinoQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 228 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 228 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 228 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const jeansNino = await rosyOnline.query(getJeansNinoQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, jeansNino),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPantalonesTelaNino(req, res) {
  try {
    const getPantalonesTelaNinoQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 44 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 44 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 44 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const pantalonesTelaNino = await rosyOnline.query(
      getPantalonesTelaNinoQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        pantalonesTelaNino
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPijamasNino(req, res) {
  try {
    const getPijamasNinoQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 756 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 756 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 756 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const pijamasNino = await rosyOnline.query(getPijamasNinoQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, pijamasNino),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRopaInviernoNino(req, res) {
  try {
    const getRopaInviernoNinoQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 930 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 930 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 930 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaInviernoNino = await rosyOnline.query(getRopaInviernoNinoQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, ropaInviernoNino),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRopaNina(req, res) {
  try {
    const getRopaNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 36 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 36 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 36 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaNina = await rosyOnline.query(getRopaNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, ropaNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getBlusasNina(req, res) {
  try {
    const getBlusasNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 40 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 40 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 40 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const blusasNina = await rosyOnline.query(getBlusasNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, blusasNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getChaquetasNina(req, res) {
  try {
    const getChaquetasNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 691 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 691 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 691 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const chaquetasNina = await rosyOnline.query(getChaquetasNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, chaquetasNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getMamelucosNina(req, res) {
  try {
    const getMamelucosNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 754 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 754 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 754 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const mamelucosNina = await rosyOnline.query(getMamelucosNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, mamelucosNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getFaldasNina(req, res) {
  try {
    const getFaldasNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 39 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 39 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 39 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const faldasNina = await rosyOnline.query(getFaldasNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, faldasNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getShortsNina(req, res) {
  try {
    const getShortsNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 229 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 229 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 229 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const shortsNina = await rosyOnline.query(getShortsNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, shortsNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getJumpersNina(req, res) {
  try {
    const getJumpersNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 452 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 452 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 452 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const jumpersNina = await rosyOnline.query(getJumpersNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, jumpersNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getJeansNina(req, res) {
  try {
    const getJeansNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 38 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 38 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 38 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const jeansNina = await rosyOnline.query(getJeansNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, jeansNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPantalonesTelaNina(req, res) {
  try {
    const getPantalonesTelaNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 226 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 226 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 226 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const pantalonesTelaNina = await rosyOnline.query(
      getPantalonesTelaNinaQuery,
      {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.json({
      data: paginatedResults(
        req.query.page,
        req.query.limit,
        pantalonesTelaNina
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getVestidosNina(req, res) {
  try {
    const getVestidosNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 41 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 41 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 41 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const vestidosNina = await rosyOnline.query(getVestidosNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, vestidosNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPijamasNina(req, res) {
  try {
    const getPijamasNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 37 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 37 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 37 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const pijamasNina = await rosyOnline.query(getPijamasNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, pijamasNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getTrajesBanioNina(req, res) {
  try {
    const getTrajesBanioNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 971 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 971 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 971 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const trajesBanioNina = await rosyOnline.query(getTrajesBanioNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, trajesBanioNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRopaInviernoNina(req, res) {
  try {
    const getRopaInviernoNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 929 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 929 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 929 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const ropaInviernoNina = await rosyOnline.query(getRopaInviernoNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, ropaInviernoNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getZapatos(req, res) {
  try {
    const getZapatosQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 54 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 54 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 54 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const zapatos = await rosyOnline.query(getZapatosQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, zapatos),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getZapatosCaballero(req, res) {
  try {
    const getZapatosCaballeroQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 86 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 86 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 86 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const zapatosCaballero = await rosyOnline.query(getZapatosCaballeroQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, zapatosCaballero),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getZapatosDama(req, res) {
  try {
    const getZapatosDamaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 85 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 85 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 85 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const zapatosDama = await rosyOnline.query(getZapatosDamaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, zapatosDama),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getZapatosNino(req, res) {
  try {
    const getZapatosNinoQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 87 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 87 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 87 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const zapatosNino = await rosyOnline.query(getZapatosNinoQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, zapatosNino),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getZapatosNina(req, res) {
  try {
    const getZapatosNinaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 88 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 88 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 88 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const zapatosNina = await rosyOnline.query(getZapatosNinaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, zapatosNina),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getVariedades(req, res) {
  try {
    const getVariedadesQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1447 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1447 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1447 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const variedades = await rosyOnline.query(getVariedadesQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, variedades),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getHogar(req, res) {
  try {
    const getHogarQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 78 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 78 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 78 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const hogar = await rosyOnline.query(getHogarQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, hogar),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getToallas(req, res) {
  try {
    const getToallasQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 760 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 760 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 760 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const toallas = await rosyOnline.query(getToallasQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, toallas),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAlfombras(req, res) {
  try {
    const getAlfombrasQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 933 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 933 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 933 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const alfombras = await rosyOnline.query(getAlfombrasQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, alfombras),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCojines(req, res) {
  try {
    const getCojinesQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 52 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 52 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 52 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const cojines = await rosyOnline.query(getCojinesQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, cojines),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCameras(req, res) {
  try {
    const getCamerasQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 759 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 759 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 759 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const cameras = await rosyOnline.query(getCamerasQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, cameras),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCortinas(req, res) {
  try {
    const getCortinasQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 50 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 50 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 50 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const cortinas = await rosyOnline.query(getCortinasQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, cortinas),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getColchas(req, res) {
  try {
    const getColchasQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 931 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 931 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 931 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const colchas = await rosyOnline.query(getColchasQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, colchas),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getEdredones(req, res) {
  try {
    const getEdredonesQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 758 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 758 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 758 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const edredones = await rosyOnline.query(getEdredonesQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, edredones),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getMantelesMesa(req, res) {
  try {
    const getMantelesMesaQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 761 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 761 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 761 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const mantelesMesa = await rosyOnline.query(getMantelesMesaQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, mantelesMesa),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getDescuentos(req, res) {
  try {
    const getDescuentosQuery =
      `SELECT A.object_id, A.term_taxonomy_id, A.ID, A.post_date, A.post_content, A.post_title, A.post_excerpt, A.post_status, A.post_name, A.post_type, A.price, B.quantity, C.picture_cover ` +
      `FROM ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as price ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1521 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_price" ` +
      `) A ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as quantity ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1521 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_stock" ` +
      `) B ` +
      `ON A.object_id = B.object_id ` +
      `INNER JOIN ( ` +
      `SELECT A.object_id, A.term_taxonomy_id, B.ID, B.post_date, B.post_content, B.post_title, B.post_excerpt, B.post_status, B.post_name, B.post_type, C.meta_value as picture_cover ` +
      `FROM  wp_j8dwsram9m_term_relationships A ` +
      `INNER JOIN wp_j8dwsram9m_posts B ` +
      `ON A.object_id = B.ID ` +
      `INNER JOIN wp_j8dwsram9m_postmeta C ` +
      `ON B.ID = C.post_id ` +
      `WHERE  A.term_taxonomy_id = 1521 ` +
      `AND B.post_type = "product" ` +
      `AND B.post_status = "publish" ` +
      `AND C.meta_key = "_thumbnail_id" ` +
      `) C ` +
      `ON A.object_id = C.object_id`;
    const descuentos = await rosyOnline.query(getDescuentosQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.json({
      data: paginatedResults(req.query.page, req.query.limit, descuentos),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCoverPicture(req, res) {
  const { ID } = req.params;
  let urlCover = "";
  let month = "";
  let year = "";
  let nameFile = "";
  const pictureCoverQuery =
    `SELECT meta_value ` +
    `FROM  wp_j8dwsram9m_postmeta ` +
    `WHERE  post_id = ${ID} ` +
    `AND meta_key = '_thumbnail_id'`;
  const pictureCover = await rosyOnline.query(pictureCoverQuery, {
    plain: false,
    raw: false,
    type: Sequelize.QueryTypes.SELECT,
  });
  const releaseDateItemQuery =
    `SELECT post_date ` + `FROM wp_j8dwsram9m_posts ` + `WHERE ID = ${ID}`;
  const releaseDateItem = await rosyOnline.query(releaseDateItemQuery, {
    plain: false,
    raw: false,
    type: Sequelize.QueryTypes.SELECT,
  });
  if (pictureCover.length > 0 && releaseDateItem.length > 0) {
    const pictureCoverNameQuery =
      `SELECT image_filename ` +
      `FROM wp_j8dwsram9m_pmxi_images ` +
      `WHERE attachment_id = ${pictureCover[0].meta_value} `;
    const pictureCoverName = await rosyOnline.query(pictureCoverNameQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    if (pictureCoverName.length > 0) {
      month = releaseDateItem[0].post_date.getMonth() + 1;
      if (month < 10) {
        month = releaseDateItem[0].post_date.getMonth() + 1;
        month = "0" + month;
      }
      year = releaseDateItem[0].post_date.getFullYear();
      nameFile = pictureCoverName[0].image_filename;
      urlCover =
        "https://4b6.96c.myftpupload.com/wp-content/uploads/" +
        year +
        "/" +
        month +
        "/" +
        nameFile;
    } else {
      const urlPictureCoverQuery =
        `SELECT guid ` +
        `FROM wp_j8dwsram9m_posts ` +
        `WHERE ID = ${pictureCover[0].meta_value}`;
      const urlPictureCover = await rosyOnline.query(urlPictureCoverQuery, {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      });
      urlCover = urlPictureCover[0].guid.replace(
        "tiendasrosy.com",
        "4b6.96c.myftpupload.com"
      );
    }
  }
  res.json({ data: urlCover });
}

export async function getPictures(req, res) {
  try {
    const { ID } = req.params;
    let urlCover = "";
    let urlsCarrousel = [];
    const pictureCoverQuery =
      `SELECT meta_id, post_id, meta_key, meta_value ` +
      `FROM  wp_j8dwsram9m_postmeta ` +
      `WHERE post_id = ${ID} AND meta_key = '_thumbnail_id'`;
    const pictureCarrouselQuery =
      `SELECT meta_id, post_id, meta_key, meta_value ` +
      `FROM  wp_j8dwsram9m_postmeta ` +
      `WHERE post_id = ${ID} AND meta_key = '_product_image_gallery'`;
    const pictureCover = await rosyOnline.query(pictureCoverQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    const pictureCarrousel = await rosyOnline.query(pictureCarrouselQuery, {
      plain: false,
      raw: false,
      type: Sequelize.QueryTypes.SELECT,
    });
    if (pictureCover.length > 0) {
      const idPictureCover = parseInt(pictureCover[0].meta_value);
      const urlPictureCoverQuery =
        `SELECT guid ` +
        `FROM wp_j8dwsram9m_posts ` +
        `WHERE ID = ${idPictureCover}`;
      const urlPictureCover = await rosyOnline.query(urlPictureCoverQuery, {
        plain: false,
        raw: false,
        type: Sequelize.QueryTypes.SELECT,
      });
      urlCover = urlPictureCover[0].guid;
      urlCover = urlCover.replace(
        "https://tiendasrosy.com",
        "https://secureservercdn.net/198.71.233.135/4b6.96c.myftpupload.com"
      );
    }
    if (pictureCarrousel.length > 0) {
      const urlsPicturesCarrousel = pictureCarrousel[0].meta_value;
      urlsCarrousel = urlsPicturesCarrousel.split(",");
      for (let index = 0; index < urlsCarrousel.length; index++) {
        if (urlsCarrousel[index] !== "") {
          const urlPictureCarrouselQuery =
            `SELECT guid ` +
            `FROM wp_j8dwsram9m_posts ` +
            `WHERE ID = ${urlsCarrousel[index]}`;
          const urlPictureCarrousel = await rosyOnline.query(
            urlPictureCarrouselQuery,
            {
              plain: false,
              raw: false,
              type: Sequelize.QueryTypes.SELECT,
            }
          );
          let urlPicture = urlPictureCarrousel[0].guid;
          urlPicture = urlPicture.replace(
            "https://tiendasrosy.com",
            "https://secureservercdn.net/198.71.233.135/4b6.96c.myftpupload.com"
          );
          urlsCarrousel[index] = urlPicture;
        } else {
          urlsCarrousel.splice(index, 1);
        }
      }
    }

    res.json({
      cover: urlCover,
      carrousel: urlsCarrousel,
    });
  } catch (error) {
    console.log(error);
  }
}
