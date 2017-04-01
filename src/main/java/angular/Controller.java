package angular;

import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.route.RouteOverview;

import java.util.ArrayList;
import java.util.List;

import static spark.Spark.*;

public class Controller {
    private final static Logger logger = LoggerFactory.getLogger(Controller.class);

    private final Gson gson = new Gson();
    private final List<Hero> heroes = new ArrayList<Hero>();

    public Controller() {
        heroes.add(new Hero(1, "Super Man"));
        heroes.add(new Hero(2, "Magneto"));
    }

    public void setup() {
        staticFileLocation("public");

        path("/api", () -> {
            path("/heroes", () -> {
                get("", (req, res) -> {
                    res.type("application/json");
                    return heroes;
                }, gson::toJson);
            });
        });
        RouteOverview.enableRouteOverview();
    }
}

