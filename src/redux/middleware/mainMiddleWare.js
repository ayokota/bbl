export function mainMiddleWare({ dispatch }) {
    return function(next) {
        return function(action) {
            return next(action);
        }
    }
}