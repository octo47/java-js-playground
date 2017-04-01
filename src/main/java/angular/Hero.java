package angular;

import lombok.Data;

@Data
class Hero {
    private long id;
    private String name;

    Hero(long id, String name) {
        this.id = id;
        this.name = name;
    }
}
