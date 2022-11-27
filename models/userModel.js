const mongoose= require('mongoose')


const userSchema=mongoose.Schema(
    {
            userName:String,
            email:String,
            mobileNumber:Number,
            password:String,
            timeStamp:Date,
            keyrole:{},
            currentCompanyName:String,
            currentDesignation:String,
            dp:String,
            about:String,
            experience:[ ],
            skills:[],
            resume:String,

        });
        const users=   mongoose.model('users', userSchema); 

        const postsSchema=mongoose.Schema(
            {
                postedBy: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "users"
                },
                    postText:String,
                    mediaType:String,
                    date:String,
                    timeStamp:Date,
                    file:String,
                 
                   like:[],
                    comment:[{
                        commentedBy:{
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "users"
                                   },
                      commentText:String,
                      timeStamp:Date,
                      userName:String,
                      keyroles:[],
                      dp:String,
 


                            }
                          ],           

                    
        
                });
                const posts=   mongoose.model('posts', postsSchema); 

                const emailVerifySchema=mongoose.Schema(
                    {
                           email:String,
                           verificationCode:String,
                           sessionActivity:    { type: Date, expires: '360s', default: Date.now },
                
                        
                    });
                        const verifyEamil=   mongoose.model('verifyEmail', emailVerifySchema); 
                
                        const jobPostSchema=mongoose.Schema(
                            {
                                companyName:String ,
                                designation:String,
                                workLocation :String ,
                                workType :String,
                                workMode:String,
                                minSalary :Number,
                                maxSalary:Number,
                                overView :String,
                                jd:String,
                                authorisationReq:Boolean,
                                userId:{
                                    type: mongoose.Schema.Types.ObjectId,
                                    ref: "users"
                                           },
                                companyLogo:String,
                                timeStamp:Date,
                                authorised:Boolean,
                                appliedCandidates:[
                                 { userId: {
                                        type: mongoose.Schema.Types.ObjectId,
                                        ref: "users"
                                              },
                                  
                                    timeStamp:Date,          
                                  }
                                ]
                        
                                });
                                const jobPost=   mongoose.model('jobPost', jobPostSchema); 



        module.exports ={
            users,
            posts,
            verifyEamil,
            jobPost,
         
        
        }

 