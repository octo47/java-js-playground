package server;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.Spark;
import spark.route.RouteOverview;

import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.util.List;

public class Controller {
    private final static Logger logger = LoggerFactory.getLogger(Controller.class);

    private final Gson gson = new Gson();
    private final List<Hero> heroes;
    private final Type typeOfHeroes = new TypeToken<List<Hero>>() {
    }.getType();

    public Controller() {
        heroes = gson.fromJson(new InputStreamReader(
                this.getClass().getResourceAsStream("/heroes.json")),
                typeOfHeroes);
    }

    public void setup() {
        Spark.staticFileLocation("public");

        Spark.path("/api", () -> {
            Spark.path("/heroes", () -> {
                Spark.get("", (req, res) -> {
                    res.type("application/json");
                    return heroes;
                }, gson::toJson);
            });
        });
        Spark.path("/", () -> {
            Spark.redirect.get("/*", "/");
        });
        RouteOverview.enableRouteOverview();
    }
}

