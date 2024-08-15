import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

interface UrlAttributes {
  id?: number;
  url: string;
  uri: string;
}

class Url extends Model<UrlAttributes> implements UrlAttributes {
  public id!: number;
  public url!: string;
  public uri!: string;
}

Url.init(
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uri: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

export { Url };
