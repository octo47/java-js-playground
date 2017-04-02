package angular;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.route.RouteOverview;

import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.util.List;

import static spark.Spark.*;

class Controller {
    private final static Logger logger = LoggerFactory.getLogger(Controller.class);

    private final Gson gson = new Gson();
    private final List<Hero> heroes;
    private final Type typeOfHeroes = new TypeToken<List<Hero>>() {
    }.getType();

    Controller() {
        heroes = gson.fromJson(new InputStreamReader(
                        this.getClass().getResourceAsStream("/angular/heroes.json")),
                typeOfHeroes);
    }

    void setup() {
        staticFileLocation("public");

        path("/api", () -> {
            path("/heroes", () -> {
                get("", (req, res) -> {
                    res.type("application/json");
                    return heroes;
                }, gson::toJson);
            });
        });
        path("/", () -> {
            redirect.get("/*", "/");
        });
        RouteOverview.enableRouteOverview();
    }
}

