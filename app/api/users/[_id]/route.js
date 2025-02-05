import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/UserModel";

export async function GET(req, {params}) {
    try {
        await connect();

        const { _id } = params;
        // console.log(_id);

        const user = await User.findById(_id);
        // console.log(user);
        if (!user) {
            return new Response(JSON.stringify({
                message:"User not found"
            }),
                {status:404}
            )
        }

        return new Response(JSON.stringify(user), {
            status: 200,
            headers:{"Content-Type":"application/json"},
        })
    } catch (error) {
        return new Response(
            JSON.stringify({
                message:"Server Error"
            }),
            {
                status:500,
            }
        )
    }
}