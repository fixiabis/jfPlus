_ = {};
__ = /\\/;
___ = [];
____ = () => { };
_____ = _$_;

(($, $$) => {
    $[+[]] = "proc";

    $["xf"] = [4096, 256, 16, 1];

    $["c"] = 0;  // char
    $["t"] = ""; // text
    $["l"] = 0;  // length

    $["proc"] = ($$, $$$) => ( // convert to char
        (() => {
            !$["l"] && ($["c"] = 0);
            $["c"] += $["xf"][$["l"]++] * $$;
        })(),
        $["l"] == 4 ? (
            $["l"] = 0,
            $["t"] += __$($["c"]),
            $["t"]
        ) : $$$
    );

    $["ch"] = $$ => (
        (() => (
            ($$ == _) && $__($["t"]), $["t"] = ""
        ))(),
        $$
    );

    $$(_, {
        [_]: {
            ["get"]: () => $["proc"](0, _)
        },
        [__]: {
            ["get"]: () => $["proc"](1, _)
        },
        [___]: {
            ["get"]: () => $["proc"](2, _)
        },
        [____]: {
            ["get"]: () => $["proc"](3, _)
        },
        [_____]: {
            ["get"]: () => $["ch"](_)
        }
    });

    $$(__, {
        [_]: {
            ["get"]: () => $["proc"](4, _)
        },
        [__]: {
            ["get"]: () => $["proc"](5, _)
        },
        [___]: {
            ["get"]: () => $["proc"](6, _)
        },
        [____]: {
            ["get"]: () => $["proc"](7, _)
        },
        [_____]: {
            ["get"]: () => $["ch"](__)
        }
    });

    $$(___, {
        [_]: {
            ["get"]: () => $["proc"](8, _)
        },
        [__]: {
            ["get"]: () => $["proc"](9, _)
        },
        [___]: {
            ["get"]: () => $["proc"](10, _)
        },
        [____]: {
            ["get"]: () => $["proc"](11, _)
        },
        [_____]: {
            ["get"]: () => $["ch"](___)
        }
    });

    $$(____, {
        [_]: {
            ["get"]: () => $["proc"](12, _)
        },
        [__]: {
            ["get"]: () => $["proc"](13, _)
        },
        [___]: {
            ["get"]: () => $["proc"](14, _)
        },
        [____]: {
            ["get"]: () => $["proc"](15, _)
        },
        [_____]: {
            ["get"]: () => $["ch"](____)
        }
    });
})({}, Object["defineProperties"]);