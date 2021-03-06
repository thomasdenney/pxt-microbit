/**
* Runtime and event utilities.
*/
//% weight=1 color="#333333"
namespace control {

    /**
     * Returns the value of a C++ runtime constant
     */
    //% weight=2 weight=19 blockId="control_event_source_id" block="%id" blockGap=8
    export function eventSourceId(id: EventBusSource): number {
        return id;
    }
    /**
     * Returns the value of a C++ runtime constant
     */
    //% weight=1 weight=19 blockId="control_event_value_id" block="%id"
    export function eventValueId(id: EventBusValue): number {
        return id;
    }

    /**
     * Display specified error code and stop the program.
     */
    //% shim=pxtrt::panic
    export function panic(code: number) { }

    /**
     * If the condition is false, display msg on serial console, and panic with code 098.
     */
    export function assert(condition: boolean, msg ?: string) {
        if (!condition) {
            console.log("ASSERTION FAILED")
            if (msg != null) {
                console.log(msg)
            }
            panic(98)
        }
    }
}
