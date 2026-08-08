const AI_API =
"http://localhost:8000/api/ai/strategy";



export async function generateStrategy(
    analysisType,
    profile
){

    const response =

    await fetch(

        AI_API,

        {

            method:"POST",

            headers:{

                "Content-Type":
                "application/json"

            },


            body:JSON.stringify({

                analysis_type:
                analysisType,


                profile

            })

        }

    );



    const data =
        await response.json();



    if(!data.success){

        throw new Error(
            "AI策略生成失败"
        );

    }



    return data.strategy;

}