  const { mockServer } = require("http-mockserver");

  const { studentResults ,studentscore ,studentcourse ,ANoucments, label ,userprofile, progress, Calendar,studycard} = require('./Data');



  console.log()
  console.log()
  mockServer.addMock({
    port: 8080,
    method: "GET",
    uri: "/my/urlj",
    response: {
      body: "Hello world",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      }
    },
  });



  // mockServer.addMock({


  //   port:8080,
  //   method:"Post",
  //   uri:"/submit",
  //   response :{
  //     status:200,
  //    body: {
  //       message: "POST received",
  //     },
      
  //       Headers:{
  //   "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "*",
  //       "Access-Control-Allow-Headers": "*",
  //     }
  //   }
  // })

  // mockServer.addMock({
  //   port: 8080,
  //   method: "GET",
  //   uri: "/users",
  //   response: {
  //     body: users,
  //   },
  // });

  // mockServer.addMock({
  //   port: 8080,
  //   method: "GET",
  //   uri: "/school",
  //   response: {
  //     body: school,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "*",
  //       "Access-Control-Allow-Headers": "*",
  //     }
  //   },
  // });
  // mockServer.addMock({
  //   port: 8080,
  //   method: "GET",
  //   uri: "/employe",
  //   response: {
  //     body: software,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "*",
  //       "Access-Control-Allow-Headers": "*",
  //     }
  //   },
  // });

  mockServer.addMock ({

    port :8080,
    method : "GET",
    uri : "/result",
    // headers: {"Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Methods": "GET"},
  response: {
    body: studentResults,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    }
  },
  })
  // mockServer.addMock ({

  //   port :8080,
  //   method : "GET",
  //   uri : "/Student",
  //   // headers: {"Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Methods": "GET"},
  //  response: {
  
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "*",
  //     "Access-Control-Allow-Headers": "*",
  //   }
  // },
  // })
    mockServer.addMock ({

    port :8080,
    method : "GET",
    uri : "/score",
    // headers: {"Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Methods": "GET"},
  response: {
    body: studentscore,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    }
  },
  })
  mockServer.addMock ({

    port :8080,
    method : "GET",
    uri : "/course",
    // headers: {"Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Methods": "GET"},
  response: {
    body: studentcourse,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    }
  },
  })
  mockServer.addMock ({

    port :8080,
    method : "GET",
    uri : "/SPAnoucments",
    // headers: {"Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Methods": "GET"},
  response: {
    body:ANoucments,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    }
  },
  })
  mockServer.addMock ({

    port :8080,
    method : "GET",
    uri : "/Label",
    // headers: {"Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Methods": "GET"},
  response: {
    body:label,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    }
  },
  })
  mockServer.addMock ({

    port :8080,
    method : "GET",
    uri : "/Userprofile",
    // headers: {"Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Methods": "GET"},
  response: {
    body:userprofile,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    }
  },
  })
  mockServer.addMock ({

    port :8080,
    method : "GET",
    uri : "/myprogress",
    // headers: {"Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Methods": "GET"},
  response: {
    body:progress,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    }
  },
  })

  mockServer.addMock ({

    port :8080,
    method : "GET",
    uri : "/Calenderevents",
    // headers: {"Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Methods": "GET"},
  response: {
    body:Calendar,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    }
  },
  })
  mockServer.addMock ({

    port :8080,
    method : "GET",
    uri : "/Studycard",
    // headers: {"Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Methods": "GET"},
  response: {
    body:studycard,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    }
  },

  })
  mockServer.addMock({
    port: 8080,
    method: "POST",
    uri: "/submit",
    httpRequest: {
      body: {
        type: "JSON",
        json: {
          firstName: "1234",
          lastName: "1234"
        },
        matchType: "ONLY_MATCHING_FIELDS"
      }
    },
    response: {
      status: 200,
      body: JSON.stringify({ message: "Authorized access" }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*"
      }
    }
  });

  mockServer.addMock({
    port: 8080,
    method: "POST",
    uri: "/submit",
    response: {
      status: 401,
      body: JSON.stringify({ error: "Unauthorized: invalid firstName or lastName" }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*"
      }
    }
  });

