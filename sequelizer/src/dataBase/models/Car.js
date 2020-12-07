module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Car',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'cars',
            timestamps: false
        }
    );

    const User = require('./User')(client, DataTypes);

    Car.belongsTo(User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: 'user',
        onUpdate: 'cascade',
        onDelete: 'cascade'
    })

    return Car;
}
