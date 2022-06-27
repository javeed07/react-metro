export default function UsersReducer(state=[],Action)
{
    switch(Action.type)
    {
        case 'UsersAction':
            return Action.payload; 

            default:
                return state
    }
}