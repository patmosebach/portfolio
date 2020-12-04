import React, { Component } from 'react';
import classes from './Travel.module.css';
import PCarousel from '../../../components/UI/PCarousel/Pcarousel';
import CarouselDescription from '../../../components/UI/CarouselDescription/CarouselDescription';

import canyonlandsTrail from '../../../assets/images/Canyonlands_Trail.png';
import canyonlands from '../../../assets/images/Canyonlands.png';
import sawtoothTrail from '../../../assets/images/Sawtooth_Trail.png';
import sawtooth from '../../../assets/images/Sawtooth.png';
import tetonsTrail from '../../../assets/images/Tetons_Trail.png';
import tetons from '../../../assets/images/Tetons_2.jpg';
import windRiverTrail from '../../../assets/images/WindRiver_Trail.png';
import windRiver from '../../../assets/images/WindRiver.png';

const PROJECTS = [
    {
        title: 'Grand Teton National Forest, WY',
        image: tetonsTrail,
        black: true,
        description: 'The Teton Crest Trail is one of the higher rated trails in the US. After starting at the Death Canyon trailhead south of the Grand Teton, we spent a night below the shelf and one on the shelf. Working our way north to spend one night in the alaska basin at lake sunset lake where we hunkered down for a thunderstorm. we Continued through the south and north cascade canyon trails with a stark view of the teton as we headed north away from the Tetons twords our finish. We rounded a corner east through paintbrush canyon to our exit at string lake.',
    },
    {
        title: 'Grand Teton National Forest, WY',
        image: tetons,
        black: false,
        description: 'The Teton Crest Trail is one of the higher rated trails in the US. After starting at the Death Canyon trailhead south of the Grand Teton, we spent a night below the shelf and one on the shelf. Working our way north to spend one night in the alaska basin at lake sunset lake where we hunkered down for a thunderstorm. we Continued through the south and north cascade canyon trails with a stark view of the teton as we headed north away from the Tetons twords our finish. We rounded a corner east through paintbrush canyon to our exit at string lake.',
    },
    {
        title: 'Canyonlands National Park, UT',
        image: canyonlandsTrail,
        black: true,
        description: 'Canyonlands is around 45 minutes south of town of Moab and Arches National Park. Second in popularity to Arches, it offers alien mars-like landscape and if you would like some time alone this is the place to go. Starting at Squaw Canyon Trailhead we ended up off trail lost the very first day as this was just our second backpacking trip. We hiked through Lost Canyon and camped beside a dried up river. Then we made our way to the Needles, Canyonlands prized landmark (pictured). The following day we day hiked southwest through Chesler Park and took refuge in the Joint Crack through the afternoon heat. The final day we exited past Elephant Hill to the Elephant Hill Trailhead.'
    },
    {
        title: 'Canyonlands National Park, UT',
        image: canyonlands,
        black: true,
        description: 'Canyonlands is around 45 minutes south of town of Moab and Arches National Park. Second in popularity to Arches, it offers alien mars-like landscape and if you would like some time alone this is the place to go. Starting at Squaw Canyon Trailhead we ended up off trail lost the very first day as this was just our second backpacking trip. We hiked through Lost Canyon and camped beside a dried up river. Then we made our way to the Needles, Canyonlands prized landmark (pictured). The following day we day hiked southwest through Chesler Park and took refuge in the Joint Crack through the afternoon heat. The final day we exited past Elephant Hill to the Elephant Hill Trailhead.',
    },
    {
        title: 'Wind River Mountain Range, WY',
        image: windRiverTrail,
        black: true,
        description: 'With roughly 40 peaks over 13,000 feet, the Wind River Range is a destination to behold. Southeast of Grand Tetons National Forest the Titcomb Basin Trail is a highly trafficed backpacking destination lined with glacial lakes, snowy peaks and wildflower fields. On our way to the Titcomb lakes we passed various prestine lakes including: Hobbs Lake, Seneca Lake and Island Lake. West of the Titcomb Lakes we attempted a summit of Fremont Peak to the Northeast. Endeing up only making it to the ridge to the summit where we caught an awesome view of the Titcomb Lakes to the west (pictured) as well as Harrower Peak to the east.'
    },
    {
        title: 'Wind River Mountain Range, WY',
        image: windRiver,
        black: true,
        description: 'With roughly 40 peaks over 13,000 feet, the Wind River Range is a destination to behold. Southeast of Grand Tetons National Forest the Titcomb Basin Trail is a highly trafficed backpacking destination lined with glacial lakes, snowy peaks and wildflower fields. On our way to the Titcomb lakes we passed various prestine lakes including: Hobbs Lake, Seneca Lake and Island Lake. West of the Titcomb Lakes we attempted a summit of Fremont Peak to the Northeast. Endeing up only making it to the ridge to the summit where we caught an awesome view of the Titcomb Lakes to the west (pictured) as well as Harrower Peak to the east.',
    },
    {
        title: 'Sawtooth National Forest, ID',
        image: sawtoothTrail,
        black: false,
        description: 'Idaho might not seem like the premium destination, but it is truely a hidden gem. We made our way around the Alice-Toxaway Loop passing crystal glacial lakes including: Alice Lake (pictured), Alice Lake, Farley and Mirror. Starting at Petite Lake Trailhead our farthest Lake was Edna where we woke up in the early hour to Summit Glens Peak Passing even more glacial lakes on the way. Our views were lessened by the increasing smog from the various wildfires in Oregon and California. Never the less we found ourselves jumping in lakes and enjoying some of the best views Ive seen to date. ',
    },    {
        title: 'Sawtooth National Forest, ID',
        image: sawtooth,
        black: true,
        description: 'Idaho might not seem like the premium destination, but it is truely a hidden gem. We made our way around the Alice-Toxaway Loop passing crystal glacial lakes including: Alice Lake (pictured), Alice Lake, Farley and Mirror. Starting at Petite Lake Trailhead our farthest Lake was Edna where we woke up in the early hour to Summit Glens Peak Passing even more glacial lakes on the way. Our views were lessened by the increasing smog from the various wildfires in Oregon and California. Never the less we found ourselves jumping in lakes and enjoying some of the best views Ive seen to date. '
    }

];

class Travel extends Component {

    state = {
        currentProject: PROJECTS[0] 
    };

    handleSlide = (index) => {
        this.setState({currentProject: PROJECTS[index]});
    };

    render(){


        return(

            <div className={classes.Travel}>
                    <h1 className={classes.TravelTitle}>
                        Travel
                    </h1>
    
                    <div className={classes.TravelDescription}>
                        <CarouselDescription 
                            
                            title={this.state.currentProject.title}
                            description={this.state.currentProject.description}
                        />
                    </div>

    
                    <div className={classes.TravelCarousel}>
                        <PCarousel interval={8000} slide={this.handleSlide} items={PROJECTS}/>
                    </div>
    
            </div>
    
        );

    };
};

export default Travel;