import { Table, Model, Column, AllowNull } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'super-heroes',
})
class Heroes extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
    id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  nickname: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  real_name: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  origin_description: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    superpowers: string[];

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  catch_phrase: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    images: string[];
}

export default Heroes;
