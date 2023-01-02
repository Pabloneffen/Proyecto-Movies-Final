module.exports = (sequelize, DataTypes) =>{

    let alias = "Actores_Peliculas"
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        actor_id: {
            type: DataTypes.INTEGER
        },
        movie_id: {
            type: DataTypes.INTEGER
        },
    };
    let config = {
        tableName: "actor_movie",
        timestamps: false
    }
    
        const Actor_Pelicula = sequelize.define(alias, cols, config);
    
        
    
        return Actor_Pelicula;
    }