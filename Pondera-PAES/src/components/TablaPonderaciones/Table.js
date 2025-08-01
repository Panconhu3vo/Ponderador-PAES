import { View, StyleSheet } from "react-native";
import SquareTable from "./SquareTable";
import SquareTotal from "./SquareTotal";

export default function Table() {
    return (
        <View style={{ alignItems: "center" }}>
            <View style={{ gap: 2, marginVertical: 5, width: 261 }}>
                <View style={[tabla.fila, { justifyContent: "flex-end" }]}>
                    <SquareTable
                        textSquare={"Ponderación"}
                        rotate={true}
                        litleSquare={false}
                    />
                    <SquareTable
                        textSquare={"Tu Puntaje"}
                        rotate={true}
                        litleSquare={false}
                    />
                    <SquareTable
                        textSquare={"Puntaje Ponderado"}
                        rotate={true}
                        litleSquare={false}
                    />
                </View>
                <View style={tabla.fila}>
                    <SquareTable
                        textSquare={"NEM"}
                        rotate={false}
                        litleSquare={false}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                </View>
                <View style={tabla.fila}>
                    <SquareTable
                        textSquare={"Ranking"}
                        rotate={false}
                        litleSquare={false}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                </View>
                <View style={tabla.fila}>
                    <SquareTable
                        textSquare={"Competencia Matemáticas 1"}
                        rotate={false}
                        litleSquare={false}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                </View>
                <View style={tabla.fila}>
                    <SquareTable
                        textSquare={"Comptencia Lectora"}
                        rotate={false}
                        litleSquare={false}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                </View>
                <View style={tabla.fila}>
                    <SquareTable
                        textSquare={"Historia y Ciencias Sociales"}
                        rotate={false}
                        litleSquare={false}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                </View>
                <View style={tabla.fila}>
                    <SquareTable
                        textSquare={"Ciencais"}
                        rotate={false}
                        litleSquare={false}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                </View>
                <View style={tabla.fila}>
                    <SquareTable
                        textSquare={"Comptencia Matemáticas 2"}
                        rotate={false}
                        litleSquare={false}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                    <SquareTable
                        textSquare={null}
                        rotate={false}
                        litleSquare={true}
                    />
                </View>
                <View style={tabla.fila}>
                    <SquareTable
                        textSquare={"Total Puntaje"}
                        rotate={false}
                        litleSquare={false}
                    />
                    <SquareTotal textSquare={null} />
                </View>
            </View>
        </View>
    );
}

const tabla = StyleSheet.create({
    fila: {
        flexDirection: "row",
        gap: 2,
    },
});
