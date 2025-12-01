/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "extensionID",
                "name": "Wednesday's Tools",
                "color1": "#ffd500",
                "blocks": [{
                    "opcode": "block_21511a77f1df9193",
                    "text": "[46948d63e71994be] %",
                    "blockType": "reporter",
                    "arguments": {
                        "46948d63e71994be": {
                            "type": "number",
                            "defaultValue": 0
                        }
                    }
                }, {
                    "opcode": "block_ae201272a726269a",
                    "text": "circumference of [d5bfcd0bd06d9f3b]",
                    "blockType": "reporter",
                    "arguments": {
                        "d5bfcd0bd06d9f3b": {
                            "type": "number",
                            "defaultValue": 5
                        }
                    }
                }, {
                    "opcode": "block_3fddb946f2480f38",
                    "text": "delay of [cc33bb7fd5817201]",
                    "blockType": "reporter",
                    "arguments": {
                        "cc33bb7fd5817201": {
                            "type": "number",
                            "defaultValue": 0
                        }
                    }
                }]
            }
        }
        async block_21511a77f1df9193(args) {
            return ((args["46948d63e71994be"] / (100)))
        }
        async block_ae201272a726269a(args) {
            return ((Math.PI * args["d5bfcd0bd06d9f3b"]))
        }
        async block_3fddb946f2480f38(args) {
            return ((((60) / args["cc33bb7fd5817201"]) * (16)))
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);
