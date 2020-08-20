import { sequelize } from '../database/database';
import Sequelize from 'sequelize';

/*---------------------------Taza de Cambio Actual-------------------------*/
export async function getCambioDolarLempira(req, res){
    const query = "SELECT A.Nombre,ISNULL((SELECT TOP 1 B.FactorVenta FROM TBLMonedaFactorDolares AS B WHERE B.Moneda=A.Moneda AND B.Fecha<=CONVERT(DATE,GETDATE()) ORDER BY B.Fecha DESC),0) AS 'Factor' FROM TBLMonedas AS A WHERE A.Moneda='02';";
    const cambioDolarLempira = await sequelize.query(query, {

  // If plain is true, then sequelize will only return the first
  // record of the result set. In case of false it will return all records.
  plain: false,

  // Set this to true if you don't have a model definition for your query.
  raw: false,

  // The type of query you are executing. The query type affects how results are formatted before they are passed back.
  type: Sequelize.QueryTypes.SELECT
      });
      res.json({
          data: cambioDolarLempira
      });
}