import {useContext, useEffect, useState} from "react" 
import { CampaignsContext } from "../../providers/campaigns"
import { UserContext } from "../../providers/user"
import { Chart } from "react-google-charts";
import { StyledGraphics } from "./style";



export default function DashboardGraphics (){
    const { getCampaigns} = useContext( CampaignsContext );
    useEffect(() => {
        getCampaigns()
      }, []);
    const campaigns = JSON.parse(localStorage.getItem("campaigns"))
    const {user} = useContext( UserContext )
    const [juridic, setJuridic] = useState(0)
    const [phisic, setPhisic] = useState(0)
    const [total, setTotal] = useState(0)
    const [parcial,setParcial] = useState(0)
    const countJuridic = () => {
        let count = 0
        for(let i = 0; i < campaigns.length; i++) {
            
            if(campaigns[i].ownerID === user.id){
               for(let j = 0; j < campaigns[i].raised.length; j++) {
                if( campaigns[i].raised[j].type === "juridica"){
                    count++
                }
               }
            }}
            setJuridic(count)
            return juridic
        }

    const countPhisic = () => {
        let count = 0
        for(let i = 0; i < campaigns.length; i++) {
            if(campaigns[i].ownerID === user.id ){
               for(let j = 0; j < campaigns[i].raised.length; j++) {
                if( campaigns[i].raised[j].type === "fisica"){
                    count++
                }
               }
            }}
            setPhisic(count)
            return phisic
    }

 
    
    const data = [
        ["total", "each category"],
        ["Pessoas Jurídicas", juridic],
        ["Pessoas Físicas", phisic]
      ]

    const options = {
        title: "Apoiadores",
    };

    const calculateTotal = () => {
        let value = 0
        for(let i = 0; i < campaigns.length; i++) {
            if( campaigns[i].ownerID === user.id){
                value = value + campaigns[i].financialGoal
            }
        }
        setTotal(value)
    }

    const calculateParcial = () => {
        let value = 0 
        for(let i = 0; i < campaigns.length; i++) {
            for(let j = 0; j < campaigns[i].raised.length; j++){
                if( campaigns[i].ownerID === user.id && campaigns[i].financialGoal > 0){
                    value = value + campaigns[i].raised[j].total
                }
            }
        }
        setParcial(value)
    }

console.log(campaigns)


    useEffect(() => {
        countJuridic()
        countPhisic()
        calculateParcial()
        calculateTotal()
      }, []);

      const data2 = [
        ["nome", "Total", { role: "style" }],
        ["Total Arrecadado", parcial, "green"],
        ["Meta de Arrecadação", total, "red"],
    ]

    const options2 = {
        title: "Arrecadação",
    };
      return(
       <StyledGraphics>
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"35rem"}
        height={"400px"}
        />

        <Chart chartType="ColumnChart" 
        width={"20rem"} 
        height={"300px"}
        data={data2} 
        options={options2}
        />
       </StyledGraphics>
      )
    
}