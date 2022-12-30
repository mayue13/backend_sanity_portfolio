export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {name:'name',
               title:'name',
               type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
                type:'string'
            },
            {
                title: 'Joining date',
                name: 'joiningDate',
                type: 'date',
                options: {
                  dateFormat: 'MMM YYYY'
                }
              },
            {
                title: 'Release date',
                name: 'releaseDate',
                type: 'date',
                options: {
                  dateFormat: 'MMM YYYY'
                }
            }
    ]
}