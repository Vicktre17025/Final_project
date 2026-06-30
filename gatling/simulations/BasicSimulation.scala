import io.gatling.core.Predef._
import io.gatling.http.Predef._

class BasicSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("https://gorest.co.in/public/v2")
    .acceptHeader("application/json")

  val scn = scenario("Users API Load Test")
    .exec(
      http("Get Users")
        .get("/users")
        .check(status.is(200))
        .check(responseTimeInMillis.lte(2000))
    )

  setUp(
    scn.inject(
      atOnceUsers(10),
      rampUsers(20).during(10)
    )
  ).protocols(httpProtocol)
   .assertions(
      global.successfulRequests.percent.gte(95),
      global.responseTime.max.lt(3000)
   )
}