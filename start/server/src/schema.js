const {gql} = require('apollo-server');

/*
! means can never be null,
[] means an array


type Query = query types
type XXX = object types
 */
const typeDefs = gql`
    """
    object types
    """
    type Launch{
        id: ID!
        site:String
        mission:Mission
        rocket:Rocket
        isBooked:Boolean!
    }

    type Rocket{
        id:ID!
        name:String,
        type:String
    }

    type User{
        id:ID!
        email:String!
        trips:[Launch]!
    }

    type Mission{
        name:String,
        missionPatch(size:PatchSize) : String
    }

    type TripUpdateResponse{
        success:Boolean!
        message:String
        launches:[Launch]
    }

    enum PatchSize{
        SMALL
        LARGE
    }

    """
    query types
    1. The launches query will return an array of all upcoming Launches.
    2. The launch query will return a single Launch that corresponds to the id argument provided to the query.
    3. The me query will return details for the User that's currently logged in.
    """
    type Query{
        launches:[Launch]!
        launch(id:ID!):Launch
        me:User
    }

    type Mutation{
        bookTrips(launchIds:[ID]!): TripUpdateResponse!
        cancelTrip(launchId:ID!): TripUpdateResponse!
        login(email:String):String
    }

`;

module.exports = typeDefs;
